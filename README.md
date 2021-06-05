> `initial` ブランチが特に何もしてないやつです

# install
```bash
# root
npm install <package>

# or
npm install <package> --workspace client
npm install <package> --workspace mock-server

```
# serve
```bash
npm run serve --workspaces

# or
npm run serve --workspace client
npm run serve --workspace mock-server
```
# build
```bash
npm run build --workspaces

# or
npm run build --workspace client
npm run build --workspace mock-server
```
