export default function localStorageConfig(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('BookOfMudora');
}

localStorageConfig.$inject = ['localStorageServiceProvider'];
