import { AppComponent } from './app.component';
import { BlogPostCommentsComponent } from './blog-post-comments.component';
import { TestModuleSetting } from './testing-module-model';
import { POSTS } from './mock-posts'
import { BlogPostService } from './blog-post.service'


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import * as moment from 'moment';

describe('BlogPostComments', function () {
  let de: DebugElement;
  let comp: BlogPostCommentsComponent;
  let fixture: ComponentFixture<BlogPostCommentsComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostCommentsComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should return list of replies for a given comment', () => {
    comp.postId = "postId";
    comp.comments = [
      {
        kind: "blogger#comment",
        id: "hasOneReply",
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a comment that has one reply"
      },
      {
        kind: "blogger#comment",
        id: "alsoHasTwoReplies",
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a comment that has two replies"
      },
    ];
    comp.replies = [
      {
        kind: "blogger#comment",
        id: "isAReply0",
        inReplyTo: {
          id: "hasOneReply"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a reply to id='hasOneReply' ",
      },
      {
        kind: "blogger#comment",
        id: "isAReply1",
        inReplyTo: {
          id: "hasTwoReplies"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is the first reply to id='hasTwoReplies' ",
      },
      {
        kind: "blogger#comment",
        id: "isAReply2",
        inReplyTo: {
          id: "hasTwoReplies"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is the second reply to id='hasTwoReplies' ",
      },
    ];

    let repliesFoundExpected = 2;
    let repliesFoundActual = comp.getRepliesByCommentId("hasTwoReplies").length;

    expect(repliesFoundActual).toEqual(repliesFoundExpected);
  });

  it('should return an empty list for a comment with no replies', () => {
    comp.postId = "postId";
    comp.comments = [
      {
        kind: "blogger#comment",
        id: "hasOneReply",
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a comment that has one reply"
      },
      {
        kind: "blogger#comment",
        id: "alsoHasTwoReplies",
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a comment that has two replies"
      },
      {
        kind: "blogger#comment",
        id: "hasNoReplies",
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a comment that has two replies"
      },
    ];
    comp.replies = [
      {
        kind: "blogger#comment",
        id: "isAReply0",
        inReplyTo: {
          id: "hasOneReply"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is a reply to id='hasOneReply' ",
      },
      {
        kind: "blogger#comment",
        id: "isAReply1",
        inReplyTo: {
          id: "hasTwoReplies"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is the first reply to id='hasTwoReplies' ",
      },
      {
        kind: "blogger#comment",
        id: "isAReply2",
        inReplyTo: {
          id: "hasTwoReplies"
        },
        post: {
          id: comp.postId
        },
        blog: {
          id: "blogId"
        },
        content: "This is the second reply to id='hasTwoReplies' ",
      },
    ];

    let repliesFoundExpected = 0;
    let repliesList = comp.getRepliesByCommentId("hasNoReplies")
    let repliesFoundActual = repliesList.length;

    expect(repliesFoundActual).toEqual(repliesFoundExpected);
  });

  it('should convert pm date string to readable format', () => {
    let expectedDateStr: string = "Nov 20th, 2016 - 9:27 pm";
    let actualDateStr: string = comp.formatDate("2016-11-20T19:27:00-08:00");

    expect(actualDateStr).toEqual(expectedDateStr);
  });

  it('should convert am date string to readable format', () => {
    let expectedDateStr: string = "Nov 20th, 2016 - 11:27 am";
    let actualDateStr: string = comp.formatDate("2016-11-20T09:27:00-08:00");

    expect(actualDateStr).toEqual(expectedDateStr);
  });

  it('should convert a bad date string to a message', () => {
    let expectedDateStr: string = "Date unknown";
    let actualDateStr: string = comp.formatDate("2016z-11-20T09208:00");

    expect(actualDateStr).toEqual(expectedDateStr);
  });

});