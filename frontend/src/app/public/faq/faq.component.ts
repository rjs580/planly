import { Component, OnInit } from "@angular/core";
import {Question} from "../../shared/models/question";
import {ContactUsService} from "../../shared/service/contact-us.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"]
})
export class FAQComponent implements OnInit {
  public questions: Question[];

  constructor(private contactService: ContactUsService) { }

  ngOnInit() {
    this.questions = [
      new Question("Tell me more about your financial plan.", "It starts with an overview of your current " +
        "financial situation, determining your \n" +
        "assets, debt, income, and expenses. We’ll give you specific recommendations \n" +
        "on where to hold your money, how much you need to be saving, what \n" +
        "investments to hold in your portfolio, and more! \n" +
        "<br><br>\n" +
        "Then we focus on your personal goals and help you understand what you’ll \n" +
        "need to do to achieve them. For example, if you want to buy a home, we’ll \n" +
        "help you estimate what price range you can afford, help you understand and \n" +
        "prepare for the down payment, property tax and maintenance costs. \n" +
        "<br><br>\n" +
        "The most exciting part of the plan (and our favourite) is your to-do list where\n" +
        "we give you the specific tasks you’ll complete to put your plan into action. \n" +
        "You can log in and check off your to-do’s as you accomplish them! "),
      new Question("Can Planly help me figure out...", "- if I should rent or buy a home?<br>\n" +
        "- if I should pay down debt or invest my money?<br>\n" +
        "- how to maximize my employer benefits?<br>\n" +
        "- if I can pay for my children’s tuition?<br>\n" +
        "- what investments I should hold?<br>\n" +
        "- how to combine our accounts now that we’re married?<br>\n" +
        "<br>\n" +
        "Absolutely! We can answer all of these questions and so much more. Of course the\n" +
        "answer to these questions will be different for each person, which is why we focus\n" +
        "on getting to know the real you.\n"),
      new Question("Are you a robo-advisor?", "No, but we’re friends with a couple robots! Robo-advisors focus only on the \n" +
        "investments you have with them and aren’t much help in answering questions\n" +
        "about your personal goals.\n" +
        "<br><br>\n" +
        "At Planly each client starts by working with their own dedicated financial planner.\n" +
        "Our priority is to get to know you and your goals to create a strategy for you to \n" +
        "accomplish them. Your plan will include recommendations on how much money \n" +
        "you should be investing and how it should be invested. We can also give \n" +
        "recommendations about saving money, paying off debt, and how to maximize\n" +
        "your employer’s retirement benefits. Everyone’s situation is unique and our advisors \n" +
        "take the time to get to know you in order to provide the best advice for you. \n" +
        "<br><br>\n" +
        "While you’re part of the Planly family, our advisors are here to help you reach \n" +
        "your financial goals by checking in, answering questions, and keeping you \n" +
        "accountable to complete your to-do list! \n"),
      new Question("Do I get to choose my advisor?", "When you join Planly we evaluate your situation and match you with an advisor \n" +
        "that is a good fit for your needs. Our team of advisors are constantly working \n" +
        "together to figure out the best advice for our clients, so you won’t just get one\n" +
        "advisor dedicated to you, you’ll get our entire team! "),
      new Question("Can I see a sample of a plan?", "Take a look at our <a href='/how-it-works'>How it works</a> page to see " +
        "an example of what your plan will look\n" +
        "like and the type of advice we are able to provide!\n" +
        "<br><br>\n" +
        "If you want to see even more we’d love to show you around. Get in contact with one \n" +
        "of our advisors and they will walk you through how everything works!\n"),
      new Question("Is my personal info secure?", "Keeping your personal data secure is a top priority at Planly. We \n" +
        "have developed our systems with multiple layers of security protection. When \n" +
        "you are logged-in to our website, your information is encrypted using the same\n" +
        "technology as your bank's online banking platform. Any data we require from you is stored on \n" +
        "servers in a data-center that is guarded 24/7. \n" +
        "<br><br>\n" +
        "We have ensured that our internal processes are developed so that your data is \n" +
        "only available to our employees who need to see it, and no one else. We regularly \n" +
        "audit our network to ensure that no vulnerabilities exist and that no unauthorized \n" +
        "access can take place. The following are just a few of the security measures we have \n" +
        "in place to protect your data: ", "" +
        "- SSL/TLS encryption of network communications between all of our servers<br>" +
        "- Networking provided by an ISO 27001 certified cloud computing infrastructure<br>" +
        "- Multi-Factor Authentication (MFA) mandated for our internal tools<br>" +
        "")
    ];
  }

  contactUs() {
    this.contactService.buttonClicked();
  }
}
