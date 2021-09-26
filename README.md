

# Microfrontend with Angular apps

## Steps

1. Install @nrwl/angular
  ``` 
  npm install --save-dev @nrwl/angular 
  ```
2. Create host projects (shell)
  ```
  npx nx g @nrwl/angular:app shell --mfe --mfeType=host --routing=true --style=scss
  ```
3. Create first remote projects
  ```
  npx nx g @nrwl/angular:app pr1 --mfe --mfeType=remote --port=4201 --host=shell --routing=true --style=scss
  ```
4. Create second remote projects
  ```
  npx nx g @nrwl/angular:app pr2 --mfe --mfeType=remote --port=4202 --host=shell --routing=true --style=scss
  ```
4. Added new script on global package.json 
  ```
  nx run-many --target=serve --all --parallel
  ```