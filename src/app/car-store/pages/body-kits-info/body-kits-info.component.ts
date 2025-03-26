import { Component, OnDestroy, OnInit } from '@angular/core';
import { bodyKit } from '../../interfaces/body-Kit.interfaces';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BodyKitService } from '../../services/body-kit.service';
import { CartService } from '../../services/cart.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-body-kitsInfo',
  templateUrl: './body-kits-info.component.html',
  styleUrls: ['./body-kits-info.component.scss'],
})
export class BodyKitsInfoComponent implements OnInit, OnDestroy {
  bodyKit?: bodyKit;
  loading = true; // Inicia en true para mostrar la animación de carga

  private sub0: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: BodyKitService,
    private cartS: CartService,
    private toast: NotifierService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const bodyKitId = Number(id);

      this.service.getBodyKitById(bodyKitId).subscribe({
        next: (bodyKit) => {
          if (bodyKit) {
            this.bodyKit = bodyKit;
            this.loading = false;
          } else {
            console.log('BodyKit no encontrado.');
            this.loading = false;
          }
        },
        error: (err) => {
          console.error('Error al obtener el BodyKit:', err);
          this.loading = false;
        },
      });
    }
  }

  addToCart(part: bodyKit) {
    if (part) {
      const cartItem = {
        ...part,
        type: 'bodyKit' as 'bodyKit',
      };

      this.cartS.addToCart(cartItem);
      this.toast.showSucess(
        'Producto Agregado',
        'El Producto fue agregado al carrito exitosamente.'
      );
    } else {
      console.error('No se puede agregar un BodyKit vacío al carrito.');
    }
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}
