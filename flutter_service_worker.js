'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cc8d56669160370e3ee34299b24e9a69",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "21551450083182da31f0da97238e7c5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/photo/araba.png": "5e44d84f3fb5ec6880607ee86197d270",
"assets/photo/araba1.png": "e6b0f225a2bc8266e0373a17548a2bd5",
"assets/photo/araba10.png": "c6f18623f0833f74ab5936880a1e6127",
"assets/photo/araba11.png": "8145877157b282ebac167d7629da7461",
"assets/photo/araba2.png": "ddc9762d43528922b7db9670c9789c9a",
"assets/photo/araba3.png": "1a5f472b4efc67aecfc9405ebc8644a7",
"assets/photo/araba4.png": "9bd0b8797b22b68ab3fe5c7582f428af",
"assets/photo/araba5.png": "ba6d5a907a92246b18ab110f70a15e98",
"assets/photo/araba6.png": "265952bd4dd05674cfac791e949d7d14",
"assets/photo/araba7.png": "f41c1d0341d1582550309f0014689673",
"assets/photo/araba8.png": "5a7096252a2f3e77d274f9196ffcfbcf",
"assets/photo/araba9.png": "3dc9426ba1144dfe9dc4b509273f126f",
"assets/photo/ata.png": "d8ded86cdd39d9ff693055749601d6b4",
"assets/photo/ata1.png": "b8c16e034a245b58e72f46d9a41a5311",
"assets/photo/ata10.png": "090f23bb6594a61f5a7ddcc7532fa038",
"assets/photo/ata11.png": "19830d9ffc6d74d0b858e39dc72fd88b",
"assets/photo/ata12.png": "808d773bcbc2efcdc5d2299bc1c9be8a",
"assets/photo/ata13.png": "cd275f59b2e10ea5846d92b979625fbb",
"assets/photo/ata14.png": "bd84b9eaaccdeefcf63424a943c3af60",
"assets/photo/ata15.png": "76fe44586d0960ff91060f8d2d5b9b1d",
"assets/photo/ata2.png": "a40d85022637efcf3111459102fa9eae",
"assets/photo/ata3.png": "749f4edec604802f9c26b91b33fe17f6",
"assets/photo/ata4.png": "fe13a911d56772e63663f0d43af7776d",
"assets/photo/ata5.png": "51507254270eee766a51e4c01248f5e8",
"assets/photo/ata6.png": "4aad2a75337b42096d94f44b11d63c5d",
"assets/photo/ata7.png": "a2bd2f897b5acbb562bfed57779ad739",
"assets/photo/ata8.png": "089fb7e8ae45d82d4d9e7e52d074fa4b",
"assets/photo/ata9.png": "734ed8d941e9117d5d529f0eae180339",
"assets/photo/basket1.png": "743d7af78055bc011e36eef2b345091f",
"assets/photo/basket10.png": "5ab745e8114c60622264426b01854a5c",
"assets/photo/basket11.png": "2856a39c7c5845c416008ec0b8d9cc45",
"assets/photo/basket12.png": "7f30db4288b1dc8a98513452dd5c43fa",
"assets/photo/basket13.png": "4753c04c297979dd0f4c993d98014e4d",
"assets/photo/basket14.png": "7654eb12253b30dfe5cade9f707326d2",
"assets/photo/basket15.png": "435fb660a847ef332b863e9b2dc42b29",
"assets/photo/basket16.png": "7bf5673378d86391d2dbbc522a5a3265",
"assets/photo/basket17.png": "68090ce3650c7472d487bea4f98b4bbb",
"assets/photo/basket18.png": "531d0e579b2ad419d0362c48d9c27725",
"assets/photo/basket19.png": "c4cee6696d5f09304bb101912f6f42e7",
"assets/photo/basket2.png": "795a27f741f6d1e0967fad36d6db1185",
"assets/photo/basket20.png": "45f641fcbfd4bc27ad4b6ba4200274f8",
"assets/photo/basket21.png": "c8e42e12e09660479371f19ae8c4d1c3",
"assets/photo/basket3.png": "0e6e1fcb77a8a67c6ca0b5a52b1f0b07",
"assets/photo/basket4.png": "44baedfe7d043dd0220a0ac8426571ad",
"assets/photo/basket5.png": "f70a313d0907bc7b181fc762cac09ec6",
"assets/photo/basket6.png": "ae5c1690228607d70ca2342220001599",
"assets/photo/basket7.png": "c0e876512257d3062685732e4cbe0f7e",
"assets/photo/basket8.png": "693e7eddf95b872735a40a53fd0c6696",
"assets/photo/basket9.png": "3dbd3b424ea281babb681f7d0ef9ff0f",
"assets/photo/basketbol.png": "f7fdc30ddf278b03b4e5399d741c803d",
"assets/photo/dizi.png": "06dd55dc2d864560e1cd957c9efbfd7d",
"assets/photo/dizi1.png": "27404f5bff56f1e3c7786c30f0e5fd83",
"assets/photo/dizi10.png": "d3a29de143c69c71268e6e57bcc27da7",
"assets/photo/dizi11.png": "13d664225a8593a8a41d6b493be5d682",
"assets/photo/dizi12.png": "daab68f1fb065a2058d3d75259961403",
"assets/photo/dizi13.png": "b0a02c48a0130f2382ccad188d4ba43e",
"assets/photo/dizi14.png": "4bd4bea209eb8e8886e2babdc94dcf90",
"assets/photo/dizi15.png": "9fdfc6600d9d8d6bf6579e4776f551dc",
"assets/photo/dizi2.png": "93a84e61e59ee24eb7182093f6d7f6ac",
"assets/photo/dizi3.png": "803bb1096ba4e29bd86e6b57a42231d3",
"assets/photo/dizi4.png": "63088a0069ad07f417d456bd1975d36c",
"assets/photo/dizi5.png": "6fbbf0d6540b04c5a89fbbe07bb591ac",
"assets/photo/dizi6.png": "49c608b5af3d5bba7727f493ab22ab53",
"assets/photo/dizi7.png": "a0f0bb7e322e29d33db2e9955ccb4c84",
"assets/photo/dizi8.png": "e8eceefeadb5cd3e5ae8cf5f9f5d1c24",
"assets/photo/dizi9.png": "edfe2c5d4bb3c11466d10f1ac9c54784",
"assets/photo/dizifilm.png": "efa488ada29845145d873852a5529b2b",
"assets/photo/film.png": "2f92d9baf7d970148992427f5fd65ed3",
"assets/photo/film1.png": "a9b50748f3ff19e755739adb84f3a189",
"assets/photo/film10.png": "67dd2fb6621480e9163db012f771a1a6",
"assets/photo/film11.png": "bb186006cb05219c01fee04b8cdf5fd5",
"assets/photo/film12.png": "23feeadc77a8d330a660e0eb75528e97",
"assets/photo/film13.png": "e7af27ebf295197643c8d251fb32a522",
"assets/photo/film14.png": "c5bbaa193c4c73ecba8c434ea1353a9b",
"assets/photo/film15.png": "38b330f4b6ca89a15ecfa761753957e5",
"assets/photo/film16.png": "ecf67537d9349ae88112b65eb2c80f75",
"assets/photo/film17.png": "25f84ab0bce736f589c64a2a5554d92b",
"assets/photo/film2.png": "10f39ca9bba02aa039627d4c26f34872",
"assets/photo/film3.png": "fe7c952be5c602a13083cf25b8603013",
"assets/photo/film4.png": "2edc7f17535a3e7cdeef0c1dcdb25d8a",
"assets/photo/film5.png": "1d4f0570adcc3bce47aedc4412e2283e",
"assets/photo/film6.png": "ddc86cf6c5b2b1294fa061242d0bfc5d",
"assets/photo/film7.png": "51c2f2327257087c39eed339685526b5",
"assets/photo/film8.png": "d8dfaa6e2762379035413b728376a3ff",
"assets/photo/film9.png": "137e681e388c643ef02b04f1de8f3aa6",
"assets/photo/futbol.png": "9e28973db931f029ee3afa45578aa40f",
"assets/photo/futbol1.png": "d55d4fc2109f39c0c58e3c2ace4ad710",
"assets/photo/futbol10.png": "b4fbb6b4f1fae77d9c24b8426538f849",
"assets/photo/futbol11.png": "cd75f842d4aa66d36fe693ab894c50d9",
"assets/photo/futbol12.png": "bf4005662b34e381fb25d7e2734fe335",
"assets/photo/futbol13.png": "0d93f12f0215dc528361c940c971e07d",
"assets/photo/futbol14.png": "81b7255caa5ddc4d01d08297f5cc4156",
"assets/photo/futbol15.png": "8e8bb59e570290062490a2620c24921b",
"assets/photo/futbol16.png": "ad8e229f54c0ba37fe08552a197399e3",
"assets/photo/futbol17.png": "db499e4b3ff9379bcd07afc85aa94d1e",
"assets/photo/futbol18.png": "07192fb3394f7f6fd95e6289e20a9141",
"assets/photo/futbol19.png": "1e280f4641303c54190a97e1030e8417",
"assets/photo/futbol2.png": "46b7ede8721b7ef048c1e79e19adac13",
"assets/photo/futbol20.png": "99a7e55c4edd3ad47f8d892ff77e688b",
"assets/photo/futbol21.png": "cb2f7b0d5fdc9a807d78a89718940d0c",
"assets/photo/futbol22.png": "8cc0000cbe4640a4ad264697913d4610",
"assets/photo/futbol23.png": "d55591ed077f4bd018a2327814a81830",
"assets/photo/futbol24.png": "4962d0b23de6fcb5decf55db516f79f4",
"assets/photo/futbol25.png": "9934e8f97e0b36dabaaa868992120ed3",
"assets/photo/futbol26.png": "2854ef55ab256fce90dc8a6cd3f40b9b",
"assets/photo/futbol27.png": "24bf0a1168601789fabe24a4689b208e",
"assets/photo/futbol28.png": "a90225c3a49b42543a1f5a25012d0dbd",
"assets/photo/futbol29.png": "154ec1b6193043eaddc2e542d70c5717",
"assets/photo/futbol3.png": "3df788b7eb8c0b44845ff867242a2dcd",
"assets/photo/futbol30.png": "69d95fa72feee248db1220a9e81a8ddc",
"assets/photo/futbol31.png": "5be470a8cc3e85165a45ff1497bb2bcd",
"assets/photo/futbol32.png": "431ff82519f47c67fbfb3032629e3dae",
"assets/photo/futbol33.png": "0a2f59abfa28229caa41eed3526b9eb1",
"assets/photo/futbol34.png": "077e51143aae6c9e9a7cc7963eb72bf1",
"assets/photo/futbol35.png": "efc5889c090b2df84dae629da6b8be35",
"assets/photo/futbol4.png": "50036f49bb74e9f42612931747a36323",
"assets/photo/futbol5.png": "674cb3138a4d6dffca3eebd11bfd6e46",
"assets/photo/futbol6.png": "eb0d9feb14b15e3303306af0842ee1f5",
"assets/photo/futbol7.png": "514cac67b0a11d79f28565321be27f6e",
"assets/photo/futbol8.png": "6d530ffa1584dc3db429b2b34a4d6b99",
"assets/photo/futbol9.png": "a037d2318bfa5857673ec4cb28c549ca",
"assets/photo/hayvan.png": "812ac06edb6b73c8ed236cc673db9736",
"assets/photo/hayvan1.png": "e3aa210ea893fdce4de6f48da2801687",
"assets/photo/hayvan10.png": "19a088f26ac386220de633a1646c7a8a",
"assets/photo/hayvan11.png": "8cc66ff677bec85add9d50468f416d86",
"assets/photo/hayvan12.png": "280de8f0d40ff2454e53e31e0b24d811",
"assets/photo/hayvan13.png": "1875d3d68e5594d62641362de59afea7",
"assets/photo/hayvan14.png": "ca9060e8b641cf9201e4fb0fab2968fd",
"assets/photo/hayvan2.png": "75e3d91b5a4dbc6ff67983a67cd0c320",
"assets/photo/hayvan3.png": "24e66bba8c05bf18b16affacaa43a5a0",
"assets/photo/hayvan4.png": "bb4900384271408c11e2497912544055",
"assets/photo/hayvan5.png": "e70d1dcf706d51ab368189d4bc8b76d0",
"assets/photo/hayvan6.png": "be8af0d32725e68cf1bf0f4d5649e0f9",
"assets/photo/hayvan7.png": "e837be9b0740c2e3f52cbf241ff932f0",
"assets/photo/hayvan8.png": "6cb0fa308ea062fd0d4e200b3a655bfa",
"assets/photo/hayvan9.png": "e41d79df6a5504c88e1e435427db1540",
"assets/photo/manzara.png": "007989d1cd50c78390e6988c47383484",
"assets/photo/manzara1.png": "0c2033ddc8358868ff71b8463e60b912",
"assets/photo/manzara10.png": "d286383f87c8826a6da91c6c4a2f235f",
"assets/photo/manzara11.png": "fa42d86673630dfa102218ebb7acb5d4",
"assets/photo/manzara12.png": "f89b474b229fd350ee78996ca37f3c14",
"assets/photo/manzara13.png": "b78f99e9036358fcda99f59b0c616d24",
"assets/photo/manzara14.png": "e7d78892b0e422ab610034f9b5b45d63",
"assets/photo/manzara15.png": "935bc7c4a2736cc6d3713d520c685b7a",
"assets/photo/manzara16.png": "e9d2d57bf5f60b08e53a1d120b9d52a2",
"assets/photo/manzara2.png": "7c729a398cd3e8ac62febf0cf62689b7",
"assets/photo/manzara3.png": "1683db10056e53410f00a9fe47380409",
"assets/photo/manzara4.png": "d3d595c6065c97154d212ffe47aa6267",
"assets/photo/manzara5.png": "171f3f53b40840fbef6fe79e6b009592",
"assets/photo/manzara6.png": "3674e6408e35b9cd1ce38972ff4c21fb",
"assets/photo/manzara7.png": "77604de5655dbd792fd49f13d6a01f1b",
"assets/photo/manzara8.png": "621c88e518c5065419cd44078d9afc4b",
"assets/photo/manzara9.png": "959179038048fad676b951cde4cd787c",
"assets/photo/oyun.png": "3bbb88d4a1ec91ee53a3981cac92c64b",
"assets/photo/oyun1.png": "861e22933b84571eb6f3770fa2997666",
"assets/photo/oyun10.png": "6a63d51db7a50bc514c0b5a6dd35a11c",
"assets/photo/oyun11.png": "21c042cddf91c2cc3ee5f406e52f61fc",
"assets/photo/oyun12.png": "3eae79c139d884f22afbd0b904a0018e",
"assets/photo/oyun13.png": "18f338dfd3245c84cea87e153693725f",
"assets/photo/oyun14.png": "bc7777ddf91eb9c04f6bc3d28735ed92",
"assets/photo/oyun15.png": "9230299df793d846f5f32f8bfdc36cc9",
"assets/photo/oyun16.png": "c316e6b246ffe5e85b1327d4abe5c309",
"assets/photo/oyun2.png": "469c1b8b001b343e68e622a075b33156",
"assets/photo/oyun3.png": "efc9a8d4264e084a25e966fc37f4ae59",
"assets/photo/oyun4.png": "74ea47879c924a25efa833f4f06f4b61",
"assets/photo/oyun5.png": "1d4cdf37b001ec79a6c13891822b036b",
"assets/photo/oyun6.png": "a91dfe4eeca1e732bf73360d5869e7fa",
"assets/photo/oyun7.png": "48f410631e8f669636b9660a6f8d2a06",
"assets/photo/oyun8.png": "b14f06913cac585fc785f95265826feb",
"assets/photo/oyun9.png": "7c8bacb8cd49e8079517ee2bd136492c",
"assets/photo/spor.png": "30e443590cf46c1c03aa49b24d342cd2",
"assets/photo/tenis.png": "f95058cea74cde3dd558b67da7207bd0",
"assets/photo/tenis1.png": "da347315afb7f9298fc4e086068f8986",
"assets/photo/tenis2.png": "4a8eb39b0c3c750fc8c12943c5f3e08f",
"assets/photo/tenis3.png": "47af4112ad13be3de4c734e868a1e8c4",
"assets/photo/tenis4.png": "e6e45aa5b275e14c68a2740162152f96",
"assets/photo/tenis5.png": "bbf81e6b6c4daa07b4b7a2fcf8863a51",
"assets/photo/tenis6.png": "b713f5b66a3216bfa5fe92f3a56786f4",
"assets/photo/tenis7.png": "20aa9eb17dd89b665ed58bb6102c0fb1",
"assets/photo/tenis8.png": "14a19086cd4ee957fe96b3b34223369f",
"assets/photo/tenis9.png": "3c61877fe890112d6ada96c63742d94b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d57641ebb6d60147d794f1d39d6f2f4a",
"/": "d57641ebb6d60147d794f1d39d6f2f4a",
"main.dart.js": "783e5dbb00bc3bc1226847e11683885d",
"manifest.json": "c44b40baadc11b778c5b2985b31c4d75",
"version.json": "dcbb5861bed73d12293d29bb0fc89bfa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
