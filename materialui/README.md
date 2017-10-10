# material ui components

### Steps 

1. Install material ui on react project
      http://www.material-ui.com
2. Import material ui theme. (It is in server rendering of Getting started )
    ** See example in index.js** 
    import getMuiTheme from 'material-ui/styles/getMuiTheme';
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
3. Wrap your root component in <MuiThemeProvider/> Component
    <MuiThemeProvider><App/></MuiThemeProvider>
    
4. Now Import component you want to use 
    ** See example in index.js** 
