from kivy.lang import Builder
from kivy.properties import StringProperty, ObjectProperty, NumericProperty
from kivy.config import Config
from kivy.lang import Builder
from kivymd.app import MDApp
from kivymd.uix.screen import Screen
from kivy.uix.textinput import TextInput
from Server import companies, widgets
Config.set('graphics', 'width', '800')
Config.set('graphics', 'height', '900')
Config.set('graphics', 'resizable', False)
Config.write()

from kivymd.app import MDApp
from kivymd.uix.card import MDCard

import smtplib, ssl

import random
import string
characters = string.ascii_letters + string.digits    
promoCode = ''.join(random.choice(characters) for i in range(10))

<<<<<<< HEAD
characters = string.ascii_letters + string.digits

def get_random_string(length):
    promoCode = ''.join(random.choice(characters) for i in range(length))
    return "Thanks for using Zafin Points! Your promo code is " + promoCode + ", which can be used at any participating business."
=======
>>>>>>> a2b35d96d29c7112027cdc1e9d39e3e6da9b9ebf

port = 587  # For SSL
smtp_server = "smtp.gmail.com"
receiver_email = "abwhalley@gmail.com"  # Enter your address
sender_email = "jdoe65629@gmail.com"  # Enter receiver address
password = "Titans11"
<<<<<<< HEAD
message1 = get_random_string(10) + "\nThis promo code is worth $5."
message2 = get_random_string(10) + "\nThis promo code is worth $10."
message3 = get_random_string(10) + "\nThis promo code is worth $20."
message4 = get_random_string(10) + "\nThis promo code is worth $50."
=======
message = """\
Subject: Zafin points redemption

Thanks for using Zafin Points! Your promo code is {promoCode}, which can be used at any participating business."""

#Send email here
>>>>>>> a2b35d96d29c7112027cdc1e9d39e3e6da9b9ebf

context = ssl.create_default_context()



class CompanyCard(MDCard):
    '''Card with `swipe-to-delete` behavior.'''

    text1 = StringProperty()
    text2 = StringProperty()
    text3 = StringProperty()


class ZafinPoints(MDApp):
    def __init__(self, **kwargs):
        self.redeemValue = 0
        self.points=35
        super().__init__(**kwargs)

    def build(self):
        self.screen = Builder.load_string(companies)
        self.screen = Builder.load_string(widgets)
        return self.screen

    def on_start(self):
        '''Creates a list of cards.'''

        for i in range(5):
            self.screen.ids.md_list.add_widget(
                CompanyCard(text1=f"Company {i}", text2=f"Points: {i}",text3=f"Converted value: {i+5}")
            )
        
    def menu(self):
        pass

    def redeem5(self):
        self.screen.ids.total_points.text = "Your total available points: $" + str(self.points-5)
        self.points = self.points -5
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message1)
            
    def redeem10(self):
        self.screen.ids.total_points.text = "Your total available points: $" + str(self.points-10)
        self.points = self.points -10
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message2)
            
    def redeem20(self):
        self.screen.ids.total_points.text = "Your total available points: $" + str(self.points-20)
        self.points = self.points -20
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message3)
            
    def redeem50(self):
        self.screen.ids.total_points.text = "Your total available points: $" + str(self.points-50)
        self.points = self.points -50
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message4)  



ZafinPoints().run()