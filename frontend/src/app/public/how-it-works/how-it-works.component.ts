import {Component, OnInit} from "@angular/core";
import {Step} from "../../shared/models/step";
import * as $ from "jquery";
import {GetPlanlyService} from "../../shared/service/get-planly.service";

@Component({
  selector: "app-how-it-works",
  templateUrl: "./how-it-works.component.html",
  styleUrls: ["./how-it-works.component.scss"]
})
export class HowItWorksComponent implements OnInit {
  public steps: Step[];

  constructor(private getplanly: GetPlanlyService) {
  }

  ngOnInit() {
    this.steps = [
      new Step("1. A quick chat", "step1.png", "Start with a 10-15 minute chat with one of our advisors about " +
        "your current financial situation and your goals. \n" +
        "<br><br>" +
        "We’ll walk you through our process and make sure we’re the right fit for you!", "300px"),
      new Step("2. Fill out your profile", "step2.png", "Congrats, you’re almost a member of the Planly family!\n" +
        "<br><br>" +
        "Fill out your profile and tell us about yourself. We’ll need info about your income, " +
        "how much you spend per month, assets you own and any debt you may have. This will " +
        "allow us to prepare your plan and optimize your money. We’ll never collect any info " +
        "that we don’t need for your plan (pinky swear).", "300px"),
      new Step("3. Sync your accounts", "step3.png", "Sync all of your accounts and we’ll provide you with a clear picture of your money in a single place. No need to log in to each account separately anymore, view your balances and transactions directly within Planly.\n" +
        "<br><br>" +
        "We will also use this info to:\n" +
        "<br><br>" +
        "- set custom savings and investing goals for you<br>\n" +
        "- monitor expenses and alert you of changes<br>\n" +
        "- create budgets and spending recommendations\n" +
        "<br><br>" +
        "<b>What about your personal data?</b> \n" +
        "<br><br>" +
        "We use a fully encrypted third-party data aggregation service to sync your accounts, which means we will never store any of your data on our servers.\n" +
        " ", "300px"),
      new Step("4. Get your plan on", "step4.svg", "You’ve given us the info, we’ve crunched the numbers, and now it’s time for the fun part! Your plan tells you exactly what you need to do in order to optimize your money. We give recommendations on your investment portfolio, minimizing taxes, planning for future expenses, and so much more.\n" +
        "<br><br>" +
        "Your advisor will work with you to determine what is important to you and how that works with your money. Just because something makes financial sense, doesn’t mean it’s always the best option for you, and we get that.", "300px"),
      new Step("5. Your to-do list", "step5.png", "We’ve taken your goals and our recommendations and broken them down into actionable steps. Each step has clear instructions on what you need to do in order to implement that part of your plan.\n" +
        "<br><br>" +
        "You can add or change goals whenever you like, and if you get stuck, your advisor is right there to help!", "300px", "<button id='getPlanlyHowItWorks' class='btn-planly'>Get planly</button>"),
    ];

    setTimeout(() => {
      $("#getPlanlyHowItWorks").click(() => {
        this.getplanly.buttonClicked();
      });
    }, 0);
  }

}
