'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ac703841887ee44d1aaeb3a4cd4d4959",
".git/config": "6bf344f5ac2496519c9c345f775cd539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b070de7e22563ab915702d20eb642bf2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "495764b847cb4dd4784cde4d917c95fb",
".git/logs/refs/heads/main": "85c9f338332c7c4648a15d611db64a25",
".git/logs/refs/remotes/origin/main": "ba583b6f48915d1b836d4ad7b57d2d72",
".git/objects/04/ddb36c291f838db23cbb7150d58364a14a35d0": "d5743c3b0a231470fb3634b1a7291d48",
".git/objects/06/4a58802c3033d2e26b272d58fb4f20aebf9eb3": "b774e30b28aca7082da515920c351418",
".git/objects/08/e91a913814f37d58c93c44ebd391c64b27a34b": "8020fef7230d351b1406523402584802",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/e0d8cce481ef835084522af3803554781ee779": "876d00a08aa3bc016d45b5ba4ccd4b0a",
".git/objects/20/4b3bef1bf95903962d613048bd460840507c52": "6286f0feb8106a87c8643538e28f66bb",
".git/objects/24/11b0f88f67e65fbebd6d67e49c1eec549c8987": "edef721c97a2b8151dccdd82197ae994",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/3931771db0894e1c0f0098cc4d7ef2573be8f1": "8e08a9953fe1f14ed20298c6f2142362",
".git/objects/2b/0a906c027575d6771327dd90ab49d4eb2160e4": "e920d45beab2bcaee4c88019acfc0ce5",
".git/objects/2c/f83b0288c703e5539c8535d397706eaf84f752": "39b0cb4aa9881b6730e3db0a76741a6e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/3906d3b570fc7ae5e01fb3d9bb2fa0beadcdfd": "d62fd9268adaed2338e989d57444e8a5",
".git/objects/32/23b5a303d7d98a50ba5a3998f2b7d53cc8cf7a": "f6ed1317ebf68bc4d95b16ac22e46a0d",
".git/objects/42/2da91f823edb387f3b71a42d1501258fcbf544": "cf5b9120241a3ae17d017409b4551a8d",
".git/objects/44/10d69fec5dff9bf3c049dc9d42b269819332cb": "d422ba601e19bd1130a67bb230f13917",
".git/objects/46/146f69af342da116772d5a8c8b496fe50686fb": "d098159735e082a37db67082616efde2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/5b6021326052aa3f2844453bb63ac49f870f95": "99e3035be4249227201de93566b19ce1",
".git/objects/4d/f379952bdd38e4dfe92d6dd69ff8b1fb1e6d19": "74ee15119a701f18e96cfd51025c5f26",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/18b75768a627e143cfc542226e17f3b6d99b84": "b52d621d3e92ae830b80289e7336433d",
".git/objects/64/acbd84f19f0ad9f168f8cf1a85946aa355cb4f": "11bc9a73f25a320668b78e107b5527ad",
".git/objects/65/bbd6416472d742e7e680881fccab2e9b48c36c": "75bcda1a9592c7080fbd300de90bb0b2",
".git/objects/6f/dfa9dc10f97cb8c912de7e9fe4c0b1540774ac": "2550b095858ae1d4d278f7eecc9bd315",
".git/objects/71/ae587cafd447695d1cda2d9c118b15c6d8c1a6": "003e1bc5e773a40ae6375128272f9666",
".git/objects/74/5acd499a08a72e4110fde2a0ee81791c620431": "6db3c79f011d8b6d33e7158476241d8e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/1a0f6a3aa263cfa0c8f57a3d8ad67feb0e59ae": "47843581e196b0444fc5132af3badc3e",
".git/objects/83/1e968a1f270e7c3a8635d58d357c8acc906490": "1cf2f6d612622566f7816ae5d3e0da95",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/cf13e4dfd3622c08492edcdf2000a13b5607e3": "79bd501ab0552182919cf6b5ad173776",
".git/objects/8a/3401adf06bd19543c0211d2af120a9cb6cf666": "bf8f3db3a80611b0d78b78c9a50bc82d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6d456e8e1d6eec8bb76b7b23abbb5d6c62d570": "f88bef8750cd58cc214ada4fab87cca9",
".git/objects/96/799a2e84e78b264134326ff6f77e27a19bd507": "d217a43a60ab19e0afa9bc8c2b59a44a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/e24e533d7ff3e8b40fcd54c6ae1af9e1f61ad7": "d3d341a21fad10829fda200823f54cac",
".git/objects/a5/cd13da7380953566795b0837d08789b37d76d9": "04e0a86a1a47433daabaec297994e139",
".git/objects/a9/194f56a9fdb90ed6065f01186703e5a74fa2f1": "492ab3454b0923cd483e7885661fa436",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/4850d89c41942400fe5bf6f95d9d814b1e4e82": "4524d2cec8db0cd39ba6e207bf387151",
".git/objects/ac/6b14cf073795c3f3825d9a87df3cbacd486a71": "21d01e1145acdb93093c69f109bb0a48",
".git/objects/ad/04f1ee782b3df10f4d27afbca55f6875ad7159": "0e47c732fb106f1420fb3c608563d0d7",
".git/objects/b2/14c49b74401dfcc74bb49e856dfe7d521cdbc8": "a5b5019e6ef9a187b8a62b7248682b06",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1115befe26daada32d91a1bd13f25f24028418": "e55cd8b3ff9dcabe93f7537798b8a00c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/6af5e5fff18369caf62a8b3c450d8a55466c99": "d0f5587519f38ca0fcd0bc511df29a61",
".git/objects/cb/1172860821e6d7d9535b22fb0ad1f83bd47176": "c0d8bebd42bbaef5e3afbb8a371f2401",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/8f9b08c5d965bcefb8117e3bef8f844b3c37b0": "033b6c239e3a37003ca215827b5fbd49",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/47c06e311e257fc065235116b18d5c6127c9d5": "8bdeee8e382e7c69cdb2303798d34140",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/06be6afcc0164bca4ce3b32eff496e337fb774": "d5e3ac31249ad9e32cae71e90b30f8e6",
".git/objects/e3/6cdf578fae3a821583be6099daaae53c1acef4": "47871ebbba5976278b2618aa12e81dc3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/e76760b8ab6a234d4f963b807634b7f5997bbb": "68c93158e9687545628fc42701e4e52f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d4996ea661f84eb59f9c1d9cabb199d672438e": "4b6c061c246ea602017462ab04cf96d0",
".git/objects/f3/fa06bec65102f6d609f8f9c9ce09c842c0b309": "47aad06bed2e722a3d12efe35f012274",
".git/objects/fd/56f790639977c8d38b20c7a7664f14dab005f1": "4c1333a2fb41b2f1de0083d789a7e083",
".git/refs/heads/main": "f51c6f536ec29acc8f2e1caeaf05b346",
".git/refs/remotes/origin/main": "f51c6f536ec29acc8f2e1caeaf05b346",
"assets/AssetManifest.json": "1e3a8e0d55eda6e0b9378458b374c656",
"assets/assets/images/Netflix-logo.png": "9c522c74204b0afd5e3b5950f1ab6528",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "011a71a459a755a1e935948af7beb8a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b695749bfcf8392806f00178e5033f53",
"/": "b695749bfcf8392806f00178e5033f53",
"main.dart.js": "d67814ca915f6b383e311d94cca53713",
"manifest.json": "d7bfe9c70f839c1388245feee053817e",
"version.json": "56f7d8697ff982844fe160d8b617a03b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
