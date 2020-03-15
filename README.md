# Max Length Password Highlighter: A Firefox Add-on

### [Now Available](https://addons.mozilla.org/en-US/firefox/addon/password-maxlength-highlighter/)

This is a very simple Firefox Add-on that scans the current page for any `<input type="password">` tags, to check and see if they have a `maxlength` attribute. If so, it highlights the input and provides a warning. This comes in handy if you are using a password manager and are pasting/auto-typing the password into the field, and are given no indication when your password is being truncated.

![Example](https://user-images.githubusercontent.com/4809334/76706285-aff25300-66bc-11ea-821d-feb09de33a64.png)

This was inspired by a [tweet](https://twitter.com/troyhunt/status/1239030461403299840) by [Troy Hunt](https://twitter.com/troyhunt) who ran into this issue. Further down the Twitter thread, someone [commented that an alert could come in handy](https://twitter.com/0xCC1/status/1239130306688495617).

## Limitations
This uses pure JavaScript and scans the contents of a page whenever Firefox loads its extension JavaScript. It will not pick up on password fields that are loaded after the page is loaded in some asynchronous manner. This is also my very first Firefox Add-on, so I'm probably doing something else wrong. :)
