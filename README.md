# Main Test Task
These are smoke tests for https://www.qrcode-monkey.com/

## Scenarios
Since I don't have access to the site's metrics, I've selected what I think are the two most frequent scenarios for using the service to test critical functionality.

Since the main value of the service is generation of QR codes, I decided to check the final QR code files.

Correctly generate and download a QR code when given a URL
1. Go to https://www.qrcode-monkey.com/
2. Enter a complex url in the field
3. Click the Create QR code button
4. Click the button Download PNG
5. Wait for file to download and check that content is correct

Generate and download the QR code correctly when the URL is given
1. Go to https://www.qrcode-monkey.com/
2. Go to Text tab
3. Enter in the text field
4. Click on the button Create QR code
5. Click the Download PNG button
6. Wait for the file to download and check that the content is correct

As the browser chosen Chrome, as the most frequently used.

## Libraries used
- I use the [Jimp](https://github.com/oliver-moran/jimp#readme) library for file comparison.

## Other remarks and problems
- Cypress has a [bug](https://github.com/cypress-io/cypress/issues/14857) and I use a [workaround](https://github.com/olegkorobeynikov/BitlyTestTaskPOM/blob/master/cypress/support/Pages/MainPage.js#L41) to solve it. It makes the tests take longer than they could. I could have chosen another assertion, for example comparing the request body when generating with the expected one. But then the tests wouldn't test the scenario honestly independently.
- The Jimp library gives uninformative errors if one (or both) of the files is empty or does not exist. But it is enough to spell the paths correctly once and the problem does not hurt.
- The downloaded QR code is compared to the reference image. Maintaining and adding the expected images takes little time. QR codes are not expected to change externally very often. 
