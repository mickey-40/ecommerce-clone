import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartCount();
    setInterval(() => this.updateCartCount(), 1000);
  }

  updateCartCount(): void {
    const cart = this.cartService.getCart();
    this.cartCount = cart.length;
  }
}
