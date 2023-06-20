// ChatComponent.js
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

export default function ChatComponent() {
  const [messages, setMessages] = React.useState([
    { title: "Assistant", description: "Hi, how can I help you?" },
  ])
  const [inputMessage, setInputMessage] = React.useState("")

  const addMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { title: "User", description: inputMessage.trim() },
      ])
      setInputMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addMessage()
    }
  }

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value)
  }

  return (
    <>
      <ScrollArea className="h-[500px] w-[100%] rounded-md border p-4">
        {messages.map((message, index) => (
          <Card key={index} className="w-[350px]">
            <CardHeader>
              <CardTitle>{message.title}</CardTitle>
              <CardDescription>{message.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </ScrollArea>
      <div className="flex items-center justify-center h-full">
        <Textarea
          className="w-[90%] rounded-md border p-4"
          value={inputMessage}
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
        />
        <Button className="rounded-md border p-4 ml-5" onClick={addMessage}>
          Send
        </Button>
      </div>
    </>
  )
}
