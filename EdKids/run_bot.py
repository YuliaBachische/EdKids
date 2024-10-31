import os
import django
from dotenv import load_dotenv

if __name__ == "__main__":
    load_dotenv()
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'EdKids.settings')
    django.setup()

    from api.bot import TelegramBot

    token = os.getenv('TELEGRAM_TOKEN')

    bot = TelegramBot(token)
    bot.run()
