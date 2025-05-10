# Kertaskerja UI

Web UI untuk kertaskerja

## Instructions

Run the following command to build the project.

```shell
./gradlew buildAngular
```

Then, package it in an NGINX container using the [pack](https://buildpacks.io/docs/tools/pack/) CLI and the [Paketo Buildpacks for NGINX](https://github.com/paketo-buildpacks/nginx).

``` shell
pack build kertaskerja-ui \
  --buildpack gcr.io/paketo-buildpacks/nginx \
  --builder paketobuildpacks/builder-jammy-base \
  -p dist
```

Finally, you can run the container as follows.

```shell
docker run -d --name kertaskerja-ui --publish 9004:9004 --env PORT=9004 kertaskerja-ui
```
