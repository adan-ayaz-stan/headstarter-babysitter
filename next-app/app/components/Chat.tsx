import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/openai',
    });

    const chatContainer = useRef<HTMLDivElement>(null);

    const scroll = () => {
        if (chatContainer.current) {
            const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
            if (scrollHeight >= offsetHeight + scrollTop) {
                chatContainer.current.scrollTo(0, scrollHeight + 200);
            }
        }
    }

    useEffect(() => {
        scroll();
    }, [messages]);

    const renderResponse = () => {
        return (
            <div className="response">
                {messages.map((message, index) => (
                    <div key={message.id} className={`chat-line ${message.role === 'user' ? 'user-message' : 'ai-message'}`}>
                        <Image className="avatar" alt="avatar" src={message.role === 'user' ? '/user.png' : '/ai.png'} width={32} height={32}/>
                        <div style={{width: '100%', marginLeft: '16px' }}>
                            <p className="message">{message.content}</p>
                            { index < messages.length - 1 && <div className="horizontal-line"/> } 
                        </div>
                    </div>
                ))}
            </div>
        );
    }


    return (
        <div className="chat">
            {renderResponse()}
            
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    name="input-field"
                    type="text"
                    value={input}
                    placeholder='Type a message...'
                    onChange={handleInputChange}
                />
                <button type="submit" className="button1">Send</button>
            </form>
        </div>
    );
};

export default Chat