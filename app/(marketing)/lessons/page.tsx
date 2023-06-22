"use client"

import { useEffect, useRef } from "react"
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"

import "xterm/css/xterm.css"
import { Editor, useMonaco } from "@monaco-editor/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const markdownText = `# PYTHON SYNTAX
## Review
Great! So far we’ve looked at:

- Print statements
- How to create, modify, and use variables
- Arithmetic operations like addition, subtraction, division, and multiplication
- How to use comments to make your code easy to understand
- Different data types, including strings, ints, floats, and booleans
- Converting between data types

Here are a few more resources to add to your toolkit:

- Codecademy Docs: Python
- Codecademy Workspaces: Python

Make sure to bookmark these links so you have them at your disposal.

## Instructions

1. Let's apply all of the concepts you have learned one more time! Create a variable called 'skill_completed' and set it equal to the string "Python Syntax".

Checkpoint 2 Passed

2. Create a variable called 'exercises_completed' and set it equal to 13. Create another variable called 'points_per_exercise' and set it equal to 5.

Checkpoint 3 Passed

3. Create a variable called 'point_total' and set it equal to 100.

Checkpoint 4 Passed

4. Update 'point_total' to be the original value plus the result of multiplying 'exercises_completed' and 'points_per_exercise'.

Checkpoint 5 Passed

5. Add a comment above your declaration of ;points_per_exercise' that says: "The amount of points for each exercise may change, because points don't exist yet"

Checkpoint 6 Passed

6. Print a string to the console that says: "I got X points!" with the value of 'point_total where X is.

Checkpoint 7 Passed

## Community Forums

Here are some helpful links to the top questions asked by coders about this exercise:

- [Is this all there is to know about syntax in Python?](#)
- [What programming language should I learn?](#)
- [What are some cool things that Python has been used for?](#)

Still have questions? View this exercise's thread in the Codecademy Forums.
`

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const terminal = useRef<Terminal>()
  const monaco = useMonaco()

  useEffect(() => {
    terminal.current = new Terminal()
    const fitAddon = new FitAddon()
    terminal.current.loadAddon(fitAddon)

    if (terminalRef.current) {
      terminal.current.open(terminalRef.current)
      fitAddon.fit()
    }

    return () => {
      terminal.current?.dispose()
    }
  }, [])

  return (
    <div className="flex h-[84vh]">
      <div className="w-1/3 overflow-auto bg-white p-4">
        <ReactMarkdown
          className="prose"
          remarkPlugins={[remarkGfm]}
          children={markdownText}
        />
      </div>
      <div className="h-[84vh] w-1/3">
        {monaco && (
          <Editor
            width="100%"
            height="100%"
            theme="vs-dark"
            defaultLanguage="javascript"
          />
        )}
      </div>
      <div ref={terminalRef} className="h-[85vh] w-1/3"></div>
    </div>
  )
}
