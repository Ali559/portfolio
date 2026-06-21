'use client'

import { motion } from 'framer-motion'
import { Database, Server, Smartphone } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { aboutText, skills } from '@/data'

const categories = ['Languages', 'Tools', 'Frameworks', 'Databases', 'Other'] as const

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{aboutText}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <h3 className="text-2xl mb-6">Skills &amp; Technologies</h3>
            <Tabs defaultValue="Languages" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="Languages">Languages</TabsTrigger>
                <TabsTrigger value="Tools">Tools</TabsTrigger>
                <TabsTrigger value="Frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="Databases">Databases</TabsTrigger>
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="space-y-4 mt-6">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating responsive, interactive user interfaces with React, Next.js, and modern
                  CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building robust APIs and server-side applications with Node.js, Python, and cloud
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Database Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designing efficient database schemas and optimizing queries for both SQL and NoSQL
                  databases.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
