# import 
import numpy as np
import time
import os
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# checkpoint 
checkpoint = "microsoft/DialoGPT-medium"
# download and cache tokenizer
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
# download and cache pre-trained model
model = AutoModelForCausalLM.from_pretrained(checkpoint)

# A CounsellorBot class
class CounsellorBot():
    def __init__(self):
        # history to store chat continuity
        self.chat_history_ids = None
        self.bot_input_ids = None
        self.end_chat = False
        self.context = []
        # a variable to track the stage of conversation
        self.stage = 0  
        # start the chat
        self.welcome()
        
    def welcome(self):
        print("Initializing CounsellorBot ...")
        time.sleep(2)
        print('Type "bye" or "quit" or "exit" to end the session \n')
        time.sleep(3)
        greeting = np.random.choice([
            "Welcome! I'm your career and personal development counselor. How can I assist you today?",
            "Hello! I'm here to help you with any guidance you need. What would you like to talk about?",
            "Hi there! I’m your virtual counselor, ready to help you navigate your career or personal goals. How can I assist you?"
        ])
        print("CounsellorBot >>  " + greeting)
        
    def user_input(self):
        text = input("User    >> ")
        if text.lower().strip() in ['bye', 'quit', 'exit']:
            self.end_chat = True
            print('CounsellorBot >>  I’m glad we had this conversation. Wishing you the best in your future endeavors!')
            time.sleep(1)
            print('\nEnding session ...')
        else:
            # store input and update the context
            self.new_user_input_ids = tokenizer.encode(text + tokenizer.eos_token, return_tensors='pt')
            self.context.append(text)  # store input
            if len(self.context) > 10:  # limit context length to keep it manageable
                self.context.pop(0)

    def bot_response(self):
        if self.chat_history_ids is not None:
            self.bot_input_ids = torch.cat([self.chat_history_ids, self.new_user_input_ids], dim=-1) 
        else:
            self.bot_input_ids = self.new_user_input_ids

        # Create attention mask
        attention_mask = torch.ones(self.bot_input_ids.shape, dtype=torch.long)

        # generate response
        self.chat_history_ids = model.generate(
            self.bot_input_ids,
            max_length=1000,
            pad_token_id=tokenizer.eos_token_id,
            attention_mask=attention_mask
        )
        
        # decode bot's response
        response = tokenizer.decode(self.chat_history_ids[:, self.bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
        
        # customized responses based on context
        if self.stage == 0:
            response = self.initial_response(self.context[-1])
            self.stage += 1
        else:
            response = self.followup_response(self.context[-1])
        
        print('CounsellorBot >>  ' + response)

    def initial_response(self, user_input):
        doctor_prompts = [
            "Are you currently preparing for medical school or already enrolled?",
            "What do you think will be the biggest challenge in your journey to becoming a doctor?",
            "Have you started thinking about residency programs or specialties you’re interested in?"
        ]
        # Responding with initial counseling-related prompts and offering guidance
        initial_prompts = [
            "Could you tell me more about your current career path or study? What are you working towards?",
            "What’s something you feel challenged by, either in your career or personal growth?",
            "I’m here to listen. Can you share what’s on your mind regarding your career or life journey?"
        ]
        
        # Motivate the user to open up or explore their feelings and goals
        motivational_prompts = [
            "It’s great that you’re thinking about your future! What’s something you’re most excited to work on?",
            "Self-reflection is a great start! What is your vision for yourself in the next few years?",
            "Let's set the foundation for this conversation—what’s your biggest goal right now?"
        ]
        
        # Offer guidance based on career or study
        if "career" in user_input.lower():
            response = np.random.choice([
                "Are there any specific fields or roles you’ve been thinking about exploring?",
                "What skills do you think will help you advance in your career? We can figure out how to build them together."
            ])
        elif "medicine" in user_input.lower() or "doctor" in user_input.lower():
            response = np.random.choice(doctor_prompts)
        elif "study" in user_input.lower():
            response = np.random.choice([
                "What subjects are you passionate about? Do you have a clear path for where you want to go?",
                "Are there areas you find more challenging? Let’s figure out a strategy for improvement."
            ])
        else:
            response = np.random.choice(initial_prompts + motivational_prompts)
        return response
    
    def followup_response(self, user_input):
        medical_followups = [
            "What kind of medical school preparation are you currently focused on? MCAT, interviews, or applications?",
            "Have you explored the different specialties like surgery, pediatrics, or internal medicine? Which one interests you the most?",
            "Balancing studies and personal life can be tough in medical school. How do you plan to manage that balance?"
        ]
        # Follow-up responses: after the user has responded to initial questions
        guidance_responses = [
            "That sounds great! What are the steps you’re thinking of taking to move forward?",
            "Sometimes it helps to break things down into smaller goals. Do you have any short-term objectives?",
            "It’s normal to feel uncertain, but having a clear goal can help. How about we explore some potential directions?"
        ]
        
        motivational_responses = [
            "You’re doing great by reflecting on this. Every step counts, and I’m here to help.",
            "Keep going! It’s all about small, consistent actions. What’s something you can focus on this week?",
            "You’ve got this! The fact that you’re thinking about your goals is already progress. What’s one thing you’re excited about?"
        ]
        
        empathetic_responses = [
            "I understand that it can be tough at times. What’s something that’s been on your mind lately?",
            "It’s completely normal to feel overwhelmed. How do you usually manage stress or challenges?",
            "I’m glad you’re sharing this with me. Do you have a support system in place, like friends or mentors?"
        ]
        
        action_steps = [
            "Would you like to create a plan together for your next steps?",
            "How about we set a few achievable goals to get started? I can help guide you through that process.",
            "Let's map out some skills or experiences that would help you get closer to your goal."
        ]
        
        # Choose responses based on current context
        if "stressed" in user_input.lower() or "overwhelmed" in user_input.lower():
            response = np.random.choice(empathetic_responses)
        elif "goal" in user_input.lower() or "plan" in user_input.lower():
            response = np.random.choice(action_steps)
        else:
            response = np.random.choice(medical_followups+guidance_responses + motivational_responses)
        
        return response

    def random_response(self):
        # fallback random response for unclear inputs
        return np.random.choice([
            "That’s an interesting point. Could you explain more?",
            "I understand. Do you feel like you’re on the right track, or would you like more guidance?",
            "It's okay to take things one step at a time. How are you feeling right now about your current situation?"
        ])


# build a CounsellorBot object
bot = CounsellorBot()

# start chatting
while True:
    bot.user_input()
    if bot.end_chat:
        break
    bot.bot_response()
