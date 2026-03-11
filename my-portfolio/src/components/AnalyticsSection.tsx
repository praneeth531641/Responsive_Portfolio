import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Eye, Users, MessageCircle } from 'lucide-react';

interface MetricsData {
  totalViews: number;
  uniqueVisitors: number;
  scrollDepth: Record<string, number>;
  sectionsViewed: Record<string, number>;
  aiUsage: number;
  socialClicks: number;
}

export const AnalyticsSection: React.FC = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );
  const [metrics, setMetrics] = useState<MetricsData>({
    totalViews: 0,
    uniqueVisitors: 0,
    scrollDepth: { '25%': 0, '50%': 0, '75%': 0, '100%': 0 },
    sectionsViewed: {},
    aiUsage: 0,
    socialClicks: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [days] = useState(30);

  useEffect(() => {
    let isMounted = true;

    const loadMetrics = async () => {
      try {
        const response = await fetch(`/api/analytics?days=${days}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.details || data?.error || 'Failed to load analytics');
        }

        if (!isMounted) return;

        setMetrics({
          totalViews: data.totalViews || 0,
          uniqueVisitors: data.uniqueVisitors || 0,
          scrollDepth: data.scrollDepth || { '25%': 0, '50%': 0, '75%': 0, '100%': 0 },
          sectionsViewed: data.sectionsViewed || {},
          aiUsage: data.aiUsage || 0,
          socialClicks: data.socialClicks || 0,
        });
        setWarnings(Array.isArray(data.warnings) ? data.warnings : []);
        setError(null);
      } catch (e) {
        if (!isMounted) return;
        setError(e instanceof Error ? e.message : 'Failed to load analytics');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadMetrics();
    const interval = setInterval(loadMetrics, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [days]);

  useEffect(() => {
    const html = document.documentElement;
    const syncTheme = () => setIsDark(html.classList.contains('dark'));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Prepare data for line chart (scroll depth over time)
  const scrollDepthData = Object.entries(metrics.scrollDepth).map(([depth, value]) => ({
    depth,
    visitors: value,
  }));

  // Prepare data for sections bar chart
  const sectionsData = Object.entries(metrics.sectionsViewed)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([section, count]) => ({
      section: section.charAt(0).toUpperCase() + section.slice(1),
      views: count,
    }));

  // Prepare pie chart data
  const engagementData = [
    { name: 'Scroll Depth', value: Object.values(metrics.scrollDepth).reduce((a, b) => a + b, 0) || 1 },
    { name: 'AI Usage', value: metrics.aiUsage || 1 },
    { name: 'Social Clicks', value: metrics.socialClicks || 1 },
  ];

  const COLORS = ['#3B82F6', '#06B6D4', '#8B5CF6'];
  const axisColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.7)';
  const tickColor = isDark ? 'rgba(255,255,255,0.85)' : 'rgba(30,41,59,0.88)';
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(148,163,184,0.28)';
  const labelColor = isDark ? '#F8FAFC' : '#0F172A';
  const tooltipBg = isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.98)';
  const tooltipBorder = isDark ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(99, 102, 241, 0.2)';
  const tooltipLabelColor = isDark ? '#fff' : '#0f172a';

  return (
    <section id="analytics" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <TrendingUp className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Live Analytics</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Portfolio Analytics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visitor analytics and engagement metrics powered by the Google Analytics Data API
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            Last {days} days
          </div>
          {loading && (
            <p className="text-sm text-gray-600 dark:text-gray-300">Loading analytics from GA4...</p>
          )}
          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
              {error}
            </p>
          )}
          {warnings.map((warning) => (
            <p
              key={warning}
              className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
            >
              {warning}
            </p>
          ))}
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="group relative glass-effect-dark rounded-2xl p-6 border border-blue-500/20 dark:border-blue-500/20 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{metrics.totalViews}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Total Page Views</p>
          </div>

          <div className="group relative glass-effect-dark rounded-2xl p-6 border border-cyan-500/20 dark:border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              <span className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {metrics.uniqueVisitors}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Unique Visitors</p>
          </div>

          <div className="group relative glass-effect-dark rounded-2xl p-6 border border-purple-500/20 dark:border-purple-500/20 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <div className="flex items-center justify-between mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">{metrics.aiUsage}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">AI Chat Usage</p>
          </div>

          <div className="group relative glass-effect-dark rounded-2xl p-6 border border-green-500/20 dark:border-green-500/20 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">{metrics.socialClicks}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Social Link Clicks</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Scroll Depth Line Chart */}
          <div className="glass-effect-dark rounded-2xl p-6 border border-blue-500/20 dark:border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Scroll Depth Engagement
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scrollDepthData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="depth" stroke={axisColor} tick={{ fill: tickColor }} />
                <YAxis stroke={axisColor} tick={{ fill: tickColor }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: tooltipBorder,
                    borderRadius: '12px',
                  }}
                  labelStyle={{ color: tooltipLabelColor }}
                  itemStyle={{ color: tooltipLabelColor }}
                  formatter={(value) => [`${value}`, 'Visitors']}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: '#06B6D4', r: 6 }}
                  activeDot={{ r: 8 }}
                  label={{ fill: labelColor }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Engagement Pie Chart */}
          <div className="glass-effect-dark rounded-2xl p-6 border border-cyan-500/20 dark:border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Engagement Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ cx = 0, cy = 0, midAngle = 0, outerRadius = 0, percent = 0, name, value }) => {
                    const radius = outerRadius + 18;
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                    if (percent < 0.05) return null;

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={labelColor}
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        fontSize={12}
                        fontWeight={600}
                      >
                        {`${name}: ${value}`}
                      </text>
                    );
                  }}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: tooltipBorder,
                    borderRadius: '12px',
                  }}
                  labelStyle={{ color: tooltipLabelColor }}
                  itemStyle={{ color: tooltipLabelColor }}
                  formatter={(value) => [`${value}`, 'Count']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Sections Bar Chart */}
        {sectionsData.length > 0 && (
          <div className="glass-effect-dark rounded-2xl p-6 border border-purple-500/20 dark:border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 bg-white dark:bg-slate-800 dark:bg-opacity-50">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Most Viewed Sections
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sectionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="section" stroke={axisColor} tick={{ fill: tickColor }} />
                <YAxis stroke={axisColor} tick={{ fill: tickColor }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: tooltipBorder,
                    borderRadius: '12px',
                  }}
                  labelStyle={{ color: tooltipLabelColor }}
                  itemStyle={{ color: tooltipLabelColor }}
                  formatter={(value) => [`${value}`, 'Views']}
                />
                <Bar
                  dataKey="views"
                  fill="#8B5CF6"
                  radius={[8, 8, 0, 0]}
                  label={{ fill: labelColor }}
                  activeBar={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}


      </div>
    </section>
  );
};

export default AnalyticsSection;
