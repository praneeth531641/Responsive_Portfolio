import React, { useState, useEffect } from 'react';
import { BarChart3, Users, TrendingUp, Eye, MessageCircle } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    totalViews: 0,
    scrollDepth: {
      '25%': 0,
      '50%': 0,
      '75%': 0,
      '100%': 0,
    },
    sectionsViewed: {} as Record<string, number>,
    aiUsage: 0,
    socialClicks: 0,
  });

  useEffect(() => {
    // Load metrics from localStorage
    const loadMetrics = () => {
      const stored = localStorage.getItem('portfolioMetrics');
      if (stored) {
        try {
          setMetrics(JSON.parse(stored));
        } catch (e) {
          console.error('Error loading metrics:', e);
        }
      }
    };

    loadMetrics();
    
    // Refresh metrics every 5 seconds
    const interval = setInterval(loadMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 shadow-2xl hover:border-blue-500/40 transition-all duration-300 z-40 max-h-96 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-bold text-white">Live Analytics</h3>
      </div>

      <div className="space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-400">Page Views</span>
            </div>
            <p className="text-2xl font-bold text-blue-400">{metrics.totalViews}</p>
          </div>

          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">Visitors</span>
            </div>
            <p className="text-2xl font-bold text-cyan-400">{metrics.aiUsage}</p>
          </div>

          <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MessageCircle className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-gray-400">AI Chats</span>
            </div>
            <p className="text-2xl font-bold text-purple-400">{metrics.aiUsage}</p>
          </div>

          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs text-gray-400">Engagement</span>
            </div>
            <p className="text-2xl font-bold text-green-400">{Object.values(metrics.scrollDepth).reduce((a, b) => a + b, 0)}</p>
          </div>
        </div>

        {/* Scroll Depth */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <p className="text-sm font-semibold text-gray-300 mb-2">Scroll Depth</p>
          <div className="space-y-2">
            {Object.entries(metrics.scrollDepth).map(([depth, count]) => (
              <div key={depth} className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-8">{depth}</span>
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${Math.min((count / 10) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-6">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections Viewed */}
        {Object.keys(metrics.sectionsViewed).length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <p className="text-sm font-semibold text-gray-300 mb-2">Top Sections</p>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {Object.entries(metrics.sectionsViewed)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 4)
                .map(([section, count]) => (
                  <div key={section} className="flex justify-between text-xs">
                    <span className="text-gray-400 capitalize">{section}</span>
                    <span className="text-blue-400 font-semibold">{count}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Google Analytics Link */}
        <a
          href="https://analytics.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center block"
        >
          View Full Analytics →
        </a>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
