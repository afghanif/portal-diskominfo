export const transformArray = (seriesByField: any, categoryByField: any, data: any) => {
    // BUILD UNIQ CATEGORY AND SERIES
    const ctgUnique = new Set();
    const seriesUnique = new Set();
    data.forEach((entry: any) => {
        if (entry[categoryByField] && entry[categoryByField].toLowerCase() !== "tidak diketahui") {
            ctgUnique.add(entry[categoryByField])
        }

        if (entry[seriesByField] && entry[seriesByField].toLowerCase() !== "tidak diketahui") {
            seriesUnique.add(entry[seriesByField])
        }
    })
    const categories = Array.from(ctgUnique).sort();
    const series = Array.from(seriesUnique).sort();
    //. BUILD UNIQ CATEGORY AND SERIES

    // BUILD SUM JUMLAH
    // var totaledData = {};

    // SORT DATA
    var helper: any = {};
    var sortedData = data.reduce(function (result: any, item: any) {
        const seriesLowerCase = item[seriesByField] ? item[seriesByField].toLowerCase() : item[seriesByField];
        const categoryLowerCase = item[categoryByField] ? item[categoryByField].toLowerCase() : item[categoryByField];
        if (seriesLowerCase != 'tidak diketahui' && categoryLowerCase != 'tidak diketahui') {
            var key = item[seriesByField] + '/' + item[categoryByField];
            const std = {
                [categoryByField]: item[categoryByField],
                [seriesByField]: item[seriesByField],
                jumlah: parseInt(item.jumlah)
            }

            if (!helper[key]) {
                helper[key] = Object.assign({}, std); // create a copy of item
                helper[key].jumlah = parseInt(helper[key].jumlah)
                result.push(helper[key]);
            } else {
                helper[key].jumlah += parseInt(item.jumlah);
            }
        }

        return result;
    }, []);
    //. SORT DATA

    const result: any = [
        {
            members: ["category"],
            caption: "category",
            values: categories,
        }
    ];

    series.forEach(serie => {
        const values = categories.map(category => {
            const item = sortedData.find((item: any) => item[categoryByField] === category && item[seriesByField] === serie);
            return item ? item.jumlah : 0;
        });

        result.push({
            members: [serie],
            caption: serie,
            values: values,
        });
    });
    return result;
};

export const transformArray2Loop = (seriesByField: any, categoryByField: any, data: any, searchByField: string | null = null, searchValue: Array<any> | null = null) => {
    const uniqueCategories: any = new Set();
    const uniqueSeries: any = new Set();
    const summedData: any = {};

    data.forEach((entry: any) => {
        const seriesLowerCase = entry[seriesByField].toLowerCase();
        const categoryLowerCase = entry[categoryByField].toLowerCase();

        if (seriesLowerCase !== 'tidak diketahui' && categoryLowerCase !== 'tidak diketahui') {
            if (searchByField && searchValue) {
                // const isAnyIncluded = searchValue.includes(entry[searchByField]);
                const isSearchIncluded = searchValue.some(item => entry[searchByField].toLowerCase().startsWith(item.toLowerCase()));
                if (isSearchIncluded) {
                    const key = `${entry[seriesByField]}/${entry[categoryByField]}`;
                    const jumlah = parseInt(entry.jumlah);

                    // Add to unique categories and series sets
                    uniqueCategories.add(entry[categoryByField]);
                    uniqueSeries.add(entry[seriesByField]);

                    // Sum the 'jumlah' values
                    if (summedData[key]) {
                        summedData[key] += jumlah;
                    } else {
                        summedData[key] = jumlah;
                    }
                }
            } else {
                const key = `${entry[seriesByField]}/${entry[categoryByField]}`;
                const jumlah = parseInt(entry.jumlah);

                // Add to unique categories and series sets
                uniqueCategories.add(entry[categoryByField]);
                uniqueSeries.add(entry[seriesByField]);

                // Sum the 'jumlah' values
                if (summedData[key]) {
                    summedData[key] += jumlah;
                } else {
                    summedData[key] = jumlah;
                }
            }
        }
    });

    const categories = [...uniqueCategories].sort();
    const series = [...uniqueSeries].sort();

    const result = [
        {
            members: ["category"],
            caption: "category",
            values: categories,
        }
    ];

    series.forEach(serie => {
        const values = categories.map(category => {
            const key = `${serie}/${category}`;
            return summedData[key] || 0;
        });

        result.push({
            members: [serie],
            caption: serie,
            values: values,
        });
    });

    return result;
};

export const formatNumber = (number: any, replaceTo: string | null = null) => {
    let formattedNumber = new Intl.NumberFormat('en-US', {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number)

    if (replaceTo) {
        formattedNumber = formattedNumber.replace(/,/g, replaceTo);
    }

    return formattedNumber
}

export const month = () => {
    return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
}