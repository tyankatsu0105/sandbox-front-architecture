> `initial` ブランチが特に何もしてないやつです

```bash
npm install --prefix packages/client --no-package-lock -E <package-name>
npm install
```

```bash
make serve package=client
make serve package=mock-server

make build package=client
make build package=mock-server
```
