# ts-react-next-persistent-component
Show-casing persistent components with NextJS.
In this particular example you'll find a Single-Page-App which loads a embedded Youtube video.
When you navigate through the site you'll be presented with a different video on every page.
However when you've started a video and then navigate to other pages then the video is not stopped and not replaced by the video which should've been shown on that particular page.
When the video is paused/ended you can navigate and see the video change.
Player state is handled using ReSub from Microsoft.

## ⚡AMP support
Add `?amp=1` to the end of the url to visit the AMP-ed page.

## styled-components
Uses [styled-components](https://www.styled-components.com/) instead of the default styled-jsx.

# demo
Azure: https://persistent-component.azurewebsites.net/

Zeit Now: https://ts-react-next-persistent-component.willemliu.now.sh/

## Staging
Zeit Now: https://ts-react-next-persistent-component-git-develop.willemliu.now.sh

Custom domain: https://persistent-component.willim.nl/
