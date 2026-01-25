import { SiReact, SiAngular, SiFastapi, SiDotnet, SiSnowflake, SiDocker, SiKubernetes, SiGithub, SiTerraform } from "react-icons/si";

export default function FlagshipPlatform() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden" id="flagship">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Project: LLM-Powered Data & AI System
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            An aspiration project showcasing end-to-end platform architecture: natural-language analytics over Snowflake using LLMs, semantic models, and cloud-native infrastructure.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 mb-12 border-2 border-indigo-200 dark:border-indigo-700/40 card-hover shadow-lg dark:shadow-xl">
          <div className="space-y-8 text-center">
            <div className="architecture-box bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl inline-block shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              UI (React / Angular)
            </div>
            
            <div className="flex justify-center">
              <div className="architecture-arrow text-3xl text-indigo-600 dark:text-indigo-400 animate-bounce" style={{ animationDelay: '0s' }}>↓</div>
            </div>
            
            <div className="architecture-box bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl inline-block shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              LLM Gateway
            </div>
            
            <div className="flex justify-center">
              <div className="architecture-arrow text-3xl text-indigo-600 dark:text-indigo-400 animate-bounce" style={{ animationDelay: '0.2s' }}>↓</div>
            </div>
            
            <div className="architecture-box bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl inline-block shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              MCP Servers (Semantic Models as Tools)
            </div>
            
            <div className="flex justify-center">
              <div className="architecture-arrow text-3xl text-indigo-600 dark:text-indigo-400 animate-bounce" style={{ animationDelay: '0.4s' }}>↓</div>
            </div>
            
            <div className="architecture-box bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl inline-block shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Snowflake (Data Marts)
            </div>
          </div>
        </div>

        {/* What I Want To Own */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Capabilities & Ownership Areas
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>End-to-end system design and architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>GitHub Actions CI/CD pipelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Dockerized microservices deployment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Kubernetes orchestration and scaling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Data marts & semantic models</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Prompt-to-SQL execution and optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Observability & cost optimization</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
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
                className="premium-chip flex items-center gap-2 text-gray-800 dark:text-indigo-100 px-4 py-2.5 rounded-xl font-medium text-sm"
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
