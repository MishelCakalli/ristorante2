import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  cards=[
    {
      imageUrl:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/52/54/ec/ristorante-villa-naj.jpg?w=400&h=200&s=1',
      title:'Card 1',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    {
      imageUrl:'https://www.borgobrufa.it/wp-content/uploads/sites/495/2023/04/Ristorante-Quattro-Sensi-2.jpg?w=400&h=200&s=1',
      title:'Card 2',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    {
      imageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/2a/90/de/18/le-sale-del-ristorante.jpg?w=400&h=200&s=1',
      title:'Card 3',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    {
      imageUrl:'https://www.borgobrufa.it/wp-content/uploads/sites/495/2023/04/Ristorante-Quattro-Sensi-2.jpg?w=400&h=200&s=1',
      title:'Card 4',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    {
      imageUrl:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/52/54/ec/ristorante-villa-naj.jpg?w=400&h=200&s=1',
      title:'Card 5',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    {
      imageUrl:'https://www.borgobrufa.it/wp-content/uploads/sites/495/2023/04/Ristorante-Quattro-Sensi-2.jpg?w=400&h=200&s=1',
      title:'Card 6',
      text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa'
    },
    
  ]

}
