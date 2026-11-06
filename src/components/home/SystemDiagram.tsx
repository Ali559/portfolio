import type { CaseStudy } from '@/data/content'
import { cn } from '@/lib/utils'

// ─── System Diagrams ────────────────────────────────────────────────────────
//
// A drawing of each back-end system, with the parts Ali built filled in the
// project's accent colour and small packets travelling along the
// connections. Node labels are product and technology names, which stay in Latin
// script in both languages, so the diagrams are always drawn left to right.

interface Node {
  id: string
  label: string
  x: number
  y: number
  w: number
  built?: boolean
}

interface Edge {
  from: string
  to: string
  both?: boolean
  built?: boolean
}

interface Diagram {
  nodes: Node[]
  edges: Edge[]
  group?: { label: string; x: number; y: number; w: number; h: number }
}

const NODE_H = 56

const diagrams: Record<NonNullable<CaseStudy['diagram']>, Diagram> = {
  lalengi: {
    nodes: [
      { id: 'apps', label: 'Client apps', x: 16, y: 144, w: 132 },
      { id: 'api', label: 'NestJS API', x: 200, y: 24, w: 148, built: true },
      { id: 'ws', label: 'WS gateway', x: 200, y: 144, w: 148, built: true },
      { id: 'workers', label: 'Workers', x: 200, y: 264, w: 148, built: true },
      { id: 'pg', label: 'PostgreSQL', x: 400, y: 64, w: 144, built: true },
      { id: 'redis', label: 'Redis', x: 400, y: 224, w: 144 },
    ],
    edges: [
      { from: 'apps', to: 'api', both: true, built: true },
      { from: 'apps', to: 'ws', both: true, built: true },
      { from: 'api', to: 'pg', built: true },
      { from: 'api', to: 'redis', built: true },
      { from: 'ws', to: 'redis', both: true, built: true },
      { from: 'workers', to: 'redis', both: true, built: true },
      { from: 'workers', to: 'pg', built: true },
    ],
  },
  codex: {
    nodes: [
      { id: 'apps', label: 'Apps', x: 16, y: 144, w: 92 },
      { id: 'api', label: 'REST API', x: 148, y: 64, w: 124, built: true },
      { id: 'socket', label: 'Socket', x: 148, y: 224, w: 124, built: true },
      { id: 'redis', label: 'Redis', x: 312, y: 64, w: 104 },
      { id: 'mysql', label: 'MySQL', x: 312, y: 224, w: 104 },
      { id: 'cron', label: 'Cron', x: 452, y: 64, w: 92, built: true },
      { id: 'push', label: 'Push', x: 452, y: 224, w: 92, built: true },
    ],
    edges: [
      { from: 'apps', to: 'api', both: true, built: true },
      { from: 'apps', to: 'socket', both: true, built: true },
      { from: 'api', to: 'redis', both: true, built: true },
      { from: 'api', to: 'mysql' },
      { from: 'socket', to: 'redis', both: true, built: true },
      { from: 'redis', to: 'cron', both: true, built: true },
      { from: 'redis', to: 'push', built: true },
    ],
  },
  qasa: {
    nodes: [
      { id: 'apps', label: 'iOS, Android', x: 16, y: 144, w: 132, built: true },
      { id: 'api', label: 'Rust API', x: 196, y: 64, w: 128, built: true },
      { id: 'worker', label: 'Worker', x: 196, y: 224, w: 128, built: true },
      { id: 'pg', label: 'PostgreSQL', x: 372, y: 24, w: 172 },
      { id: 'vpn', label: 'VPN agent', x: 372, y: 144, w: 172, built: true },
      { id: 'wallets', label: 'Iraqi wallets', x: 372, y: 264, w: 172 },
    ],
    edges: [
      { from: 'apps', to: 'api', both: true, built: true },
      { from: 'apps', to: 'vpn', built: true },
      { from: 'api', to: 'pg', both: true, built: true },
      { from: 'api', to: 'vpn', both: true, built: true },
      { from: 'worker', to: 'pg', both: true, built: true },
      { from: 'worker', to: 'wallets', built: true },
    ],
  },
  inzpiri: {
    group: { label: 'AWS', x: 168, y: 34, w: 376, h: 276 },
    nodes: [
      { id: 'vue', label: 'Vue app', x: 16, y: 144, w: 120, built: true },
      { id: 'go', label: 'Go services', x: 196, y: 144, w: 148, built: true },
      { id: 'mongo', label: 'MongoDB', x: 396, y: 92, w: 128 },
      { id: 'redis', label: 'Redis', x: 396, y: 198, w: 128 },
    ],
    edges: [
      { from: 'vue', to: 'go', built: true },
      { from: 'go', to: 'mongo' },
      { from: 'go', to: 'redis' },
    ],
  },
  seeyou: {
    nodes: [
      { id: 'slack', label: 'Slack', x: 16, y: 64, w: 120 },
      { id: 'telegram', label: 'Telegram', x: 16, y: 224, w: 120 },
      { id: 'seeyou', label: 'SEEYOU chat', x: 200, y: 144, w: 152, built: true },
      { id: 'rabbit', label: 'RabbitMQ', x: 416, y: 64, w: 128 },
      { id: 'redis', label: 'Redis', x: 416, y: 224, w: 128 },
    ],
    edges: [
      { from: 'slack', to: 'seeyou', both: true, built: true },
      { from: 'telegram', to: 'seeyou', both: true, built: true },
      { from: 'seeyou', to: 'rabbit', both: true },
      { from: 'seeyou', to: 'redis', both: true },
    ],
  },
  'smart-pricer': {
    nodes: [
      { id: 'shops', label: 'Ticket shops', x: 16, y: 144, w: 136 },
      { id: 'proxy', label: 'API proxy', x: 208, y: 144, w: 136, built: true },
      { id: 'pricing', label: 'Pricing API', x: 404, y: 92, w: 140 },
      { id: 'ticketing', label: 'Ticketing API', x: 404, y: 198, w: 140 },
    ],
    edges: [
      { from: 'shops', to: 'proxy', built: true },
      { from: 'proxy', to: 'pricing', built: true },
      { from: 'proxy', to: 'ticketing', built: true },
    ],
  },
}

export function SystemDiagram({
  kind,
  legend,
  accent,
  accentText = '#ffffff',
  className,
}: {
  kind: NonNullable<CaseStudy['diagram']>
  legend: string
  accent: string
  accentText?: string
  className?: string
}) {
  const { nodes, edges, group } = diagrams[kind]
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const markerId = `arrow-${kind}`
  const builtMarkerId = `arrow-built-${kind}`

  return (
    <figure
      dir="ltr"
      className={cn(
        'rounded-2xl bg-paper p-4 text-ink shadow-[0_30px_60px_-20px_rgb(23_15_59/0.45)] sm:p-6',
        className,
      )}
    >
      <svg
        viewBox="0 0 560 340"
        role="img"
        aria-label={nodes.map((n) => n.label).join(', ')}
        className="h-auto w-full"
      >
        <defs>
          {[
            [markerId, '#8c86a8'],
            [builtMarkerId, accent],
          ].map(([id, color]) => (
            <marker
              key={id}
              id={id}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L10 5 L0 10 z" fill={color} />
            </marker>
          ))}
        </defs>

        {group && (
          <g>
            <rect
              x={group.x}
              y={group.y}
              width={group.w}
              height={group.h}
              rx="6"
              fill="none"
              stroke="#c9c3e0"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <text
              x={group.x + 14}
              y={group.y + 26}
              fill="#5a5378"
              fontSize="16"
              fontFamily="var(--font-sans)"
            >
              {group.label}
            </text>
          </g>
        )}

        {edges.map((edge) => {
          const a = byId[edge.from]
          const b = byId[edge.to]
          const x1 = a.x + a.w
          const y1 = a.y + NODE_H / 2
          const x2 = b.x
          const y2 = b.y + NODE_H / 2
          const mid = (x1 + x2) / 2
          const marker = `url(#${edge.built ? builtMarkerId : markerId})`
          const d = `M${x1 + 4} ${y1} C${mid} ${y1}, ${mid} ${y2}, ${x2 - 6} ${y2}`
          const back = `M${x2 - 6} ${y2} C${mid} ${y2}, ${mid} ${y1}, ${x1 + 4} ${y1}`
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <path
                d={d}
                fill="none"
                stroke={edge.built ? accent : '#8c86a8'}
                strokeWidth={edge.built ? 3 : 1.5}
                markerEnd={marker}
                markerStart={edge.both ? marker : undefined}
              />
              {/* Packets: one each way on two-way connections. */}
              {[d, ...(edge.both ? [back] : [])].map((path, j) => (
                <circle key={j} className="packet" r="4.5" fill={edge.built ? accent : '#8c86a8'}>
                  <animateMotion
                    dur={`${2.2 + j * 0.6}s`}
                    begin={`${j * 1.1}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </circle>
              ))}
            </g>
          )
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={NODE_H}
              rx="12"
              fill={node.built ? accent : '#ffffff'}
              stroke={node.built ? accent : '#d9d4ec'}
              strokeWidth="2"
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + NODE_H / 2 + 6}
              textAnchor="middle"
              fill={node.built ? accentText : '#170f3b'}
              fontWeight={node.built ? 700 : 500}
              fontSize="18"
              fontFamily="var(--font-sans)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption
        dir="auto"
        className="mt-3 flex items-center gap-3 text-sm font-medium text-[#5a5378]"
      >
        <span
          aria-hidden
          className="inline-block size-3.5 rounded"
          style={{ background: accent }}
        />
        {legend}
      </figcaption>
    </figure>
  )
}
