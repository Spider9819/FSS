import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApnapediaService {

  constructor(private Http: HttpClient) { }

  wikiSearch(term: string){
   return this.Http.get('https://en.wikipedia.org/w/api.php',
    {
      

        params: {
      
        action: 'query',
      
        format: 'json',
      
        list: 'search',
      
        utf8: '1',
      
        srsearch: term, 
      
        origin: '*'
      
        }
      
      }

    
      ); 
  }
}
