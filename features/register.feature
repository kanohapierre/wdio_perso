@register
Feature: Chai page

    Scenario Outline: Test chain form

        Given I am on the page "http://www.practiceselenium.com/practice-form.html"
        Then I validate the page header "Practice Form"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> years <yrs> favorite chai <favchai> and reason <reason>
        And I select continent <continent> and commands <command>
        And I click on submit button
        Then I validate the page header "Were passionate about tea."

        Examples:
            | fname | lname  | gender | yrs | favchai | reason             | continent | command  |
            | Emma  | Watson | Female | 6   | Red Tea | Harmless Addiction | Europe     | Wait Commands |