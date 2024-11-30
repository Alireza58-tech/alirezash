import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from "framer-motion";

const Tech = () => {
  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <div id="tech" class="flex min-h[70vh] w-full
                        flex-col items-center justify-center
                        gap-16 md:gap-32">
                          <motion.h1 
                          variants={variants}
                          initial="hidden"
                          whileInView="visible"
                          transition={{duration:0.5}}


                          className="bg-gradient-to-r
                                    from-blue-500 to
                                    to-pink-500
                                      bg-clip-text
                                      text-transparent
                                      opacity-80
                                      text-4xl
                                      md:text-6xl font-semibold
                                      transition-all duration-300
                                      hover:opacity-100  ">
                            Technologies
                          </motion.h1>

                          <div className="flex flex-wrap items-center justify-center
                          gap-10 p-5 ">

                            <motion.div 
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{duration:0.5}}>
                                       <SiJavascript className="cursor-pointer text-[80px]
                                              text-yellow-500 transition-all
                                              duration-300 hover:-translate-y-5
                                              sm:text-[100px] md:text-[120px]"/>         
                            </motion.div> 



                            <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{duration:0.5}}>
                                       <FaReact  className="cursor-pointer text-[80px]
                                              text-sky-500 transition-all
                                              duration-300 hover:-translate-y-5
                                              sm:text-[100px] md:text-[120px]"/>         
                            </motion.div>


                            <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{duration:0.5}}>
                                       <FaHtml5  className="cursor-pointer text-[80px]
                                              text-orange-500 transition-all
                                              duration-300 hover:-translate-y-5
                                              sm:text-[100px] md:text-[120px]"/>         
                            </motion.div>


                            <motion.div 
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{duration:0.5}}>
                                       <RiTailwindCssFill  className="cursor-pointer text-[80px]
                                              text-sky-300 transition-all
                                              duration-300 hover:-translate-y-5
                                              sm:text-[100px] md:text-[120px]"/>         
                            </motion.div>                   

                          </div>
                        </div>
  )
}

export default  Tech