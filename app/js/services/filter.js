adsApp.factory('filter', function() {
    var filterParams = {};

    function filterByCategory(category) {
        filterParams.categoryId = category.id;
    }

    function filterByTown(town) {
        filterParams.townId = town.id;
    }

    function getFilterParams() {
        return filterParams;
    }

    function clearCategoryFilter() {
        filterParams.categoryId = '';
    }

    function clearTownFilter() {
        filterParams.townId = '';
    }

    return {
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        getFilters: getFilterParams,
        clearCategoryFilter: clearCategoryFilter,
        clearTownFilter: clearTownFilter
    }
});