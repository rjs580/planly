import { Component, OnInit } from "@angular/core";
import {Elements, ElementsOptions, StripeService, Element as StripeElement} from "ngx-stripe";
import {HttpClient} from "@angular/common/http";
import {SweetAlert} from "../../shared/service/sweetalert.service";

interface MSG {
  code: any;
  message: any;
}

@Component({
  selector: "app-reserve-your-spot",
  templateUrl: "./reserve-your-spot.component.html",
  styleUrls: ["./reserve-your-spot.component.scss"]
})
export class ReserveYourSpotComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  elementsOptions: ElementsOptions = {
    locale: "en"
  };

  constructor(private stripeService: StripeService, private http: HttpClient) { }

  ngOnInit() {
    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;

      if (!this.card) {
        this.card = this.elements.create("card", {
          style: {
            base: {
              iconColor: "#58595B",
              color: "#58595B",
              // lineHeight: "20px",
              fontWeight: 400,
              fontFamily: "'Muli', Helvetica Neue, sans-serif",
              fontSize: "16px",
              "::placeholder": {
                color: "#58595B"
              }
            }
          }
        });
        this.card.mount("#card-element");
      }
    });
  }

  onSubmit(form: HTMLFormElement, name: string, email: string, event: Event) {
    event.preventDefault();

    this.stripeService.createToken(this.card, {name}).subscribe(result => {
      if (result.token) {
        this.http.post("https://getplanly.com/payment/customers.php", {token: result.token, email: email, name: name}).subscribe(msg => {
          this.http.post("https://getplanly.com/payment/charge.php", {
            token: (msg as MSG).message.id,
            email: email,
            name: name
          }).subscribe(msg2 => {
            SweetAlert.toast().fire({
              type: "Success",
              title: "Payment successful"
            });

            form.reset();
          });
        });
      } else if (result.error) {
        SweetAlert.toast().fire({
          type: "error",
          title: "Error processing payment"
        });
        console.log(result.error.message);
      }
    });
  }
}
