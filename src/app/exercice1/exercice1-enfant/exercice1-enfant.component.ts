import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input()
  public counter: number;

  @Output()
  private counterEventEmiter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public increaseOrDecreaseCounter(value: number): void {
    this.counterEventEmiter.emit(this.counter + value);
  }
}
