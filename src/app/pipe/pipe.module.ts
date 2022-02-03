import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MypipeComponent } from './mypipe/mypipe.component';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    MypipeComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [MypipeComponent]
})
export class PipeModule { }
