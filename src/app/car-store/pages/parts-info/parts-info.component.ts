import { Component, OnDestroy, OnInit } from '@angular/core';
import { Part } from '../../interfaces/parts.interfaces';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PartsService } from '../../services/parts.service';
import { CartService } from '../../services/cart.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-partsInfo',
  templateUrl: './parts-info.component.html',
  styleUrls: ['parts-info.component.scss'],
})
export class PartsInfoComponent implements OnInit, OnDestroy {
  part?: Part;

  loading = true;

  private sub0: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: PartsService,
    private CartS: CartService,
    private toast: NotifierService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      if (id) {
        const partId = Number(id);

        this.service.getPartById(partId).subscribe({
          next: (part) => {
            if (part) {
              this.part = part;
              this.loading = false;
            } else {
              console.log('Part no encontrado');
              this.loading = false;
            }
          },
          error: (err) => {
            console.error('Error al obtener la Part:', err);
            this.loading = false;
          },
        });
      }
    }
  }

  addToCart(part: Part) {
    if (part) {
      const cartItem = {
        ...part,
        type: 'Part' as 'Part',
      };

      this.CartS.addToCart(cartItem);
      this.toast.showSucess(
        'Aggregate Product',
        'The product was successfully added to the cart.'
      );
    } else {
      console.error('No se puede agregar un Part vacío al carrito.');
    }
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}
