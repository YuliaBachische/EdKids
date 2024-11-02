from asgiref.sync import sync_to_async
from django.contrib.auth import login
from django.contrib.auth.models import User
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes

from .views import register


class TelegramBot:
    def __init__(self, token):
        self.application = ApplicationBuilder().token(token).build()
        self._setup_handlers()

    def _setup_handlers(self):
        self.application.add_handler(CommandHandler("start", self.start))
        self.application.add_handler(CallbackQueryHandler(self.play, pattern='play'))

    async def start(self, update: Update, context: ContextTypes.DEFAULT_TYPE):
        chat_id = update.effective_chat.id
        username = update.effective_user.username
        password = str(chat_id)

        user, created = await sync_to_async(User.objects.get_or_create)(
            username=username, password=password
        )
        print(username)
        print(chat_id)
        register(user)

        keyboard = [[InlineKeyboardButton("Play", url="https://edkids.online")]]
        reply_markup = InlineKeyboardMarkup(keyboard)
        await update.message.reply_text('Welcome! Click to start:', reply_markup=reply_markup)

    async def play(self, update: Update, context: ContextTypes.DEFAULT_TYPE):
        await update.callback_query.answer()
        await update.callback_query.edit_message_text(text="You clicked Play!")

    def run(self):
        self.application.run_polling()
