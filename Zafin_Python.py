from kivy.lang import Builder
from kivy.properties import StringProperty
from kivy.config import Config
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


port = 587  # For SSL
smtp_server = "smtp.gmail.com"
receiver_email = "abwhalley@gmail.com"  # Enter your address
sender_email = "jdoe65629@gmail.com"  # Enter receiver address
password = "Titans11"
message = """\
Subject: Zafin points redemption

Thanks for using Zafin Points! Your promo code is {promoCode}, which can be used at any participating business."""

#Send email here

context = ssl.create_default_context()


KV = '''

<CompanyCard>:
    size_hint_y: None
    valign: "center"

    MDBoxLayout:
        orientation: "horizontal"
        padding: 25

        MDLabel:
            text: root.text1       
            font_style: "H6"

        MDLabel:
            text: root.text2
            halign: "right"

        MDLabel:
            text: root.text3
            halign: "right"

ScreenManager:

    Screen:
        MDBoxLayout:
            orientation: "vertical"
            spacing: 20

            MDBoxLayout:
                orientation: "vertical"
                adaptive_height: True
                spacing: 50
                padding: 0

                MDToolbar:
                    title: "Zafin Points"
                    elevation: 10
                    left_action_items: [["menu", lambda x: app.menu()]]

                MDLabel:
                    text: "Your Points"
                    halign: "center"
                    font_style: "H2"

                MDList:
                    id: md_list
                    spacing: "10dp"
                    padding: 10

                
                MDLabel:
                    text: "Your total available points: $35"
                    halign: "center"
                    font_style: "H6"

            MDBoxLayout:
                orientation: "horizontal"
                spacing: "25dp"
                padding: 25
                adaptive_height: True

                MDLabel:
                    text: "How many points do you wish to redeem"
                    halign: "center"
                    width:20

                MDTextField:
                    hint_text: "Value"
                    mode: "rectangle"
                    width: "10dp"
                    id: "RedeemValue"

                MDRaisedButton:
                    text: "Redeem"
                    on_press: app.redeem()
'''



class CompanyCard(MDCard):
    '''Card with `swipe-to-delete` behavior.'''

    text1 = StringProperty()
    text2 = StringProperty()
    text3 = StringProperty()

class ZafinPoints(MDApp):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.screen = Builder.load_string(KV)

    def build(self):
        print(self.root)
        return self.screen

    def on_start(self):
        '''Creates a list of cards.'''

        for i in range(5):
            self.screen.ids.md_list.add_widget(
                CompanyCard(text1=f"Company {i}", text2=f"Points: {i}",text3=f"Converted value: {i+5}")
            )

    def menu(self):
        pass

    def redeem(self):
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)



ZafinPoints().run()