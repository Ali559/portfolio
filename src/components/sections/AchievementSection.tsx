'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, Code2, Download, Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { achievements, allSocials } from '@/data'

export function AchievementSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your next project or explore collaboration opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new opportunities, interesting projects, or
                potential collaborations. Feel free to reach out if you have any questions or just
                want to say hello!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{allSocials.email.name}</p>
                    <p className="text-muted-foreground">{allSocials.email.link}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{allSocials.github.name}</p>
                    <p className="text-muted-foreground">{allSocials.github.link}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border transition-all hover:bg-accent hover:ml-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{allSocials.linkedin.name}</p>
                    <p className="text-muted-foreground">{allSocials.linkedin.link}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl mb-6">Achievements &amp; Certifications</h3>

            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription className="text-primary">
                            {achievement.issuer}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{achievement.year}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="bg-linear-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Available for new opportunities</h4>
                  <p className="text-muted-foreground text-sm">
                    Currently open to freelance projects and full-time positions
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
