import { SiReact, SiAngular, SiFastapi, SiDotnet, SiSnowflake, SiDocker, SiKubernetes, SiGithub, SiTerraform } from "react-icons/si";

export default function FlagshipPlatform() {
  return (
    <section className="py-20 relative overflow-hidden" id="flagship">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 title-reveal">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            AI-Powered Data Platform Architecture
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 fade-in-up" style={{animationDelay: '0.2s'}}>
            End-to-end platform demonstrating natural-language analytics over Snowflake using LLMs, semantic models, and cloud-native infrastructure. Deployed at enterprise scale processing 2TB+ daily data.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="glass-effect-dark rounded-2xl p-12 mb-12 card-hover fade-in-up bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan/30" style={{animationDelay: '0.3s'}}>
          <div className="space-y-8">
            {/* Row 1: UI Layer */}
            <div className="flex justify-center">
              <div className="architecture-box glass-effect text-gray-900 dark:text-slate-100 font-bold py-4 px-8 rounded-xl inline-block transform hover:scale-110 transition-all duration-300 hover:glow-effect border-2 border-blue-400 dark:border-cyan/50 hover:border-blue-600 dark:hover:border-cyan">
                🎨 UI Layer (React / Angular)
              </div>
            </div>
            
            {/* Arrow 1 */}
            <div className="flex justify-center">
              <div className="text-3xl text-blue-600 dark:text-cyan/60 animate-bounce" style={{ animationDelay: '0s' }}>↓</div>
            </div>
            
            {/* Row 2: LLM Gateway */}
            <div className="flex justify-center">
              <div className="architecture-box glass-effect text-gray-900 dark:text-slate-100 font-bold py-4 px-8 rounded-xl inline-block transform hover:scale-110 transition-all duration-300 hover:glow-effect border-2 border-blue-400 dark:border-neon-blue/50 hover:border-blue-600 dark:hover:border-neon-blue">
                🧠 LLM Gateway (OpenAI, LangChain)
              </div>
            </div>
            
            {/* Arrow 2 */}
            <div className="flex justify-center">
              <div className="text-3xl text-blue-600 dark:text-cyan/60 animate-bounce" style={{ animationDelay: '0.2s' }}>↓</div>
            </div>
            
            {/* Row 3: MCP Servers */}
            <div className="flex justify-center">
              <div className="architecture-box glass-effect text-gray-900 dark:text-slate-100 font-bold py-4 px-8 rounded-xl inline-block transform hover:scale-110 transition-all duration-300 hover:glow-effect border-2 border-blue-400 dark:border-cyan/50 hover:border-blue-600 dark:hover:border-cyan">
                🔧 MCP Servers (Semantic Models as Tools)
              </div>
            </div>
            
            {/* Arrow 3 */}
            <div className="flex justify-center">
              <div className="text-3xl text-blue-600 dark:text-cyan/60 animate-bounce" style={{ animationDelay: '0.4s' }}>↓</div>
            </div>
            
            {/* Row 4: Data Layer */}
            <div className="flex justify-center">
              <div className="architecture-box glass-effect text-gray-900 dark:text-slate-100 font-bold py-4 px-8 rounded-xl inline-block transform hover:scale-110 transition-all duration-300 hover:glow-effect border-2 border-blue-400 dark:border-neon-blue/50 hover:border-blue-600 dark:hover:border-neon-blue">
                ❄️ Snowflake Data Warehouse (Data Marts)
              </div>
            </div>
          </div>
        </div>

        {/* What I Want To Own */}
        <div className="mb-12 fade-in-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6 gradient-text">
            Key Capabilities & Ownership Areas
          </h3>
          <div className="glass-effect-dark rounded-xl p-8 border border-blue-200 dark:border-cyan/30 bg-white dark:bg-slate-800">
            <ul className="space-y-3 text-gray-700 dark:text-slate-300">
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>End-to-end system design and architecture</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>GitHub Actions CI/CD pipelines</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>Dockerized microservices deployment</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>Kubernetes orchestration and scaling</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>Data marts & semantic models</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>Prompt-to-SQL execution and optimization</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-600 dark:hover:text-cyan transition">
                <span className="text-blue-600 dark:text-cyan font-bold text-xl">✦</span>
                <span>Observability & cost optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="fade-in-up" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6 gradient-text">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <SiReact />, name: "React" },
              { icon: <SiAngular />, name: "Angular" },
              { icon: <SiFastapi />, name: "FastAPI" },
              { icon: <SiDotnet />, name: "ASP.NET" },
              { icon: <SiSnowflake />, name: "Snowflake" },
              { icon: <SiDocker />, name: "Docker" },
              { icon: <SiKubernetes />, name: "Kubernetes" },
              { icon: <SiGithub />, name: "GitHub Actions" },
              { icon: <SiTerraform />, name: "Terraform" },
            ].map((tech, index) => (
              <div
                key={index}
                className="premium-chip flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm icon-float pop-in"
                style={{animationDelay: `${0.05 * index}s`}}
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
