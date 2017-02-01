import { Component, OnInit } from '@angular/core';
import{AuthenticationService}from '../security/authentication.service';
import { TranslateService } from '../translate';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./layout.css']
})
export class AdminLayoutComponent implements OnInit {
   public current_user_data:any;
   public username:string;
   public images_path:string;

   //Dropdown menu

  public disabled:boolean = false;
  public status_languages:{isopen:boolean} = {isopen: false};
  public status_user:{isopen:boolean} = {isopen: false};
  public isCollapsed:boolean = false;
  public isCollapsed_panel1:boolean=false;
  public isCollapsed_panel2:boolean=false;
  public panel_class:string;
  public option_class:string="list-group-item option_active";
  public selected_option:false;
  public default_language_values ={code:"en",language:"English",flag:"us.png"};

  public Languages=[];
  constructor(private auths : AuthenticationService,private _translate: TranslateService) { }
   
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status_languages.isopen = !this.status_languages.isopen;
    this.status_user.isopen = !this.status_user.isopen;
  }

  ngOnInit() {
    if (this.auths.checkCredentials()!=false)
    {
    this.current_user_data = JSON.parse(localStorage.getItem('currentUser'));
    this.username = this.current_user_data['username'];
    this.images_path ="/app/images/";   
    this.panel_class ="panel-heading main_option_active";
    this.option_class = "list-group-item option_active";

    this.Languages=[{id:"1",code:"en",language:"English",flag:"us.png"},{id:"2",code:"es",language:"Spanish",flag:"es.png"}];
    this.selectLang(this.default_language_values.code);

    }
  
  }
  LogOut(){
    this.auths.logout();
  }

  Change_Panel_Properties(isCollapsed){
     this.panel_class = "panel-heading";
    if (isCollapsed== false)
    {
        this.panel_class = "panel-heading main_option_active";
    }
     return this.panel_class;
  }

  Select_Option(selected){
     this.option_class = "list-group-item";
    if (selected == true)
    {
        this.option_class = "list-group-item option_active";
    }
  
  }
  Collapse_panel(is_Collapsed:boolean){
    return !is_Collapsed;
  }
  
 
  Change_Language(item){
    this.default_language_values.flag =item.flag;
    this.default_language_values.language =item.language;
  }

  selectLang(lang: string) {
      // set default;
      this._translate.use(lang);
    }

}
