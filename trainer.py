from bot import bot
from chatterbot.trainers import ChatterBotCorpusTrainer

trainer = ChatterBotCorpusTrainer(bot)


trainer.train(
    "chatterbot.corpus.english.greetings",
    "chatterbot.corpus.english.conversations",
    "./BOT/knowledge/emotion.yml",   
    "./BOT/knowledge/food.yml",
    "./BOT/knowledge/gossip.yml",
    "./BOT/knowledge/health.yml",
    "./BOT/knowledge/history.yml",
    "./BOT/knowledge/money.yml"     
)

def brain(user_input):
    response = bot.get_response(user_input)
    return response

wait = True

while wait: 
    print(brain(input("Talk chase: ")))

print(brain("hi"))
