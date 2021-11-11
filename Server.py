companies = '''

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
'''

widgets = '''
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
            id: total_points
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
            
        MDRaisedButton:
            text: "$5"
            on_press: app.redeem5()
        
        MDRaisedButton:
            text: "$10"
            on_press: app.redeem10()
            
        MDRaisedButton:
            text: "$20"
            on_press: app.redeem20()
            
        MDRaisedButton:
            text: "$50"
            on_press: app.redeem50()
'''
