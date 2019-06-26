import {Component, OnInit} from "@angular/core";
import {ProductDetail} from "../../shared/models/product-detail";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})
export class PricingComponent implements OnInit {
  public productDetails: ProductDetail[];

  constructor() {
  }

  ngOnInit() {
    this.productDetails = [
      new ProductDetail("Complete financial check-up", "complete_checkup.svg", "Not sure if you’re saving enough? Don’t\n" +
        "know if you’re on track to reach your goals?\n" +
        "As a Planly member you will get answers to\n" +
        "all of these questions and so much more. We\n" +
        "do a deep-dive on your current situation and\n" +
        "provide you with a plan to get you on track. "),
      new ProductDetail("Big money moments", "big_investment.svg", "Life has a tendency to throw a few curveballs\n" +
        "every now and then. We’ll be here to check in\n" +
        "on your progress and make sure everything is\n" +
        "going smoothly. If you need to adjust your\n" +
        "goals or add new ones, your advisor is just a \n" +
        "click away!"),
      new ProductDetail("Real-time view of your money", "realtime.svg", "Our technology is able to take a real-time \n" +
        "snapshot of all of your money - no matter \n" +
        "where it is. Sync your bank accounts, credit \n" +
        "cards and investments to see everything in \n" +
        "one clean, easy to understand dashboard. "),
      new ProductDetail("To-do or not to-do", "todo.svg", "Every single plan comes with an actionable \n" +
        "to-do list that details exactly what you need to \n" +
        "do to achieve your goals. Watch your progress \n" +
        "grow as you complete tasks and get closer to \n" +
        "your goals. And if you have any questions, just \n" +
        "click on the task to contact your advisor!"),
      new ProductDetail("An advisor dedicated to you", "advisor.svg", "No more call centers and generic advice. \n" +
        "Our advisors are here to build a relationship\n" +
        "with you, which is why you will always talk to\n" +
        "the same person. We think robots are great,\n" +
        "but humans are much better at understanding \n" +
        "who you are. "),
      new ProductDetail("Fiduciary responsibility", "fiduciary_1.svg", "Did we mention that we are legally abligated \n" +
        "to always put your best interests ahead of ours? \n" +
        "Because we are. (and it’s because we care \n" +
        "about you)")
    ];
  }
}
