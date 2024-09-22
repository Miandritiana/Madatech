import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'madatech';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Madatech Madagascar" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'Avec 4 ans d\'expérience dans le développement de systèmes, d\'interfaces, de bots et de solutions technologiques, je m\'efforce de rendre le web plus performant et accessible. Passionné par la conception et l\'amélioration continue, j\'aime diriger, proposer et exécuter des idées novatrices, tout en veillant à écrire et refactoriser du code propre, réutilisable et évolutif.'},
    ]);
    
    
    AOS.init(); 

  }
}
