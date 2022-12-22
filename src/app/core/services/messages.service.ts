import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public urlApi: string;
  public channelMessages$ : BehaviorSubject<Message[]>;
  public channelName: BehaviorSubject<string>;
  public channelId: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.channelMessages$ = new BehaviorSubject<Message[]>([]);
    this.channelName = new BehaviorSubject<string>("");
    this.channelId = new BehaviorSubject<number>(0);
    this.channelMessages$.subscribe();
   }

   public getMessagesByChannel(channelId: number) {
    this.httpClient.get<Message[]>(`${this.urlApi}/messages/${channelId}`).subscribe((data) => {
      this.channelMessages$.next(data);
    })


   }

}
