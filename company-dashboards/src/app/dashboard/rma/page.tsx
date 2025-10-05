// 'use client';
// import { useAuth } from '../../../components/AuthProvider';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function RMADashboard() {
//     const { isAuthenticated, isLoading } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//         if (!isLoading && !isAuthenticated) {
//             router.push('/login');
//         }
//     }, [isAuthenticated, isLoading, router]);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//             </div>
//         );
//     }

//     if (!isAuthenticated) return null;

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//             <div className="container mx-auto px-4 py-8">
//                 {/* Header */}
//                 <div className="mb-8">
//                     <div className="flex items-center mb-4">
//                         <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
//                             <span className="text-2xl text-white">📊</span>
//                         </div>
//                         <div>
//                             <h1 className="text-4xl font-bold text-gray-900">RMA Dashboard</h1>
//                             <p className="text-gray-600 mt-2">Return Merchandise Authorization tracking and analytics</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Total RMAs</h3>
//                                 <p className="text-3xl font-bold text-blue-600">1,234</p>
//                             </div>
//                             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                                 <span className="text-xl">📦</span>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="flex items-center text-green-600 text-sm">
//                                 <span>↑ 12% from last month</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500 transform hover:scale-105 transition-transform duration-300">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending</h3>
//                                 <p className="text-3xl font-bold text-orange-600">89</p>
//                             </div>
//                             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                                 <span className="text-xl">⏳</span>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="flex items-center text-red-600 text-sm">
//                                 <span>↑ 5% from last week</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed</h3>
//                                 <p className="text-3xl font-bold text-green-600">1,145</p>
//                             </div>
//                             <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                                 <span className="text-xl">✅</span>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="flex items-center text-green-600 text-sm">
//                                 <span>↑ 8% from last month</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg. Resolution</h3>
//                                 <p className="text-3xl font-bold text-purple-600">3.2</p>
//                                 <p className="text-gray-600 text-sm">days</p>
//                             </div>
//                             <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                                 <span className="text-xl">⏱️</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Charts and Additional Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
//                             <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
//                             RMA Trends
//                         </h3>
//                         <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
//                             <div className="text-center text-gray-500">
//                                 <div className="text-4xl mb-2">📈</div>
//                                 <p>RMA Trends Chart</p>
//                                 <p className="text-sm">Visualization coming soon</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
//                             <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
//                             Recent Activities
//                         </h3>
//                         <div className="space-y-4">
//                             {[
//                                 { action: 'RMA #12345 completed', time: '2 hours ago', status: 'completed' },
//                                 { action: 'RMA #12346 received', time: '4 hours ago', status: 'pending' },
//                                 { action: 'RMA #12347 approved', time: '1 day ago', status: 'approved' },
//                                 { action: 'RMA #12348 shipped', time: '2 days ago', status: 'shipped' },
//                             ].map((activity, index) => (
//                                 <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                                     <div className={`w-3 h-3 rounded-full mr-3 ${activity.status === 'completed' ? 'bg-green-500' :
//                                             activity.status === 'pending' ? 'bg-yellow-500' :
//                                                 activity.status === 'approved' ? 'bg-blue-500' : 'bg-purple-500'
//                                         }`}></div>
//                                     <div className="flex-1">
//                                         <p className="font-medium text-gray-800">{activity.action}</p>
//                                         <p className="text-sm text-gray-500">{activity.time}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';
import { useAuth } from '../../../components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

interface RMAItem {
    [key: string]: string | number;
}

interface AggregatedGroup {
    key: string;
    count: number;
    devices: number;
    cost: number;
    days: string[];
    rows: RMAItem[];
}

export default function RMADashboard() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const [rawData, setRawData] = useState<RMAItem[]>([]);
    const [filteredData, setFilteredData] = useState<RMAItem[]>([]);
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [sheetUrl, setSheetUrl] = useState<string>(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_xc8D53b3lTNKPM5cvwe2Fpdrr4N_zYYTAaScr0N7o2CHwSyWoW_PJxBMrjk5Fw/pub?gid=73302648&single=true&output=csv'
    );
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    const [currentView, setCurrentView] = useState<'regions' | 'market' | 'dm' | 'type' | 'detailed'>('regions');
    const [currentData, setCurrentData] = useState<RMAItem[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [selectedMarket, setSelectedMarket] = useState<string>('');
    const [selectedDM, setSelectedDM] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [historyStack, setHistoryStack] = useState<{ level: string; selected?: string }[]>([{ level: 'Regions' }]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router]);

    useEffect(() => {
        if (isAuthenticated) {
            initData();
        }
    }, [isAuthenticated]);

    // Utility functions - same as your original
    const parseCurrency = (v: any): number => {
        if (v == null) return 0;
        const s = String(v).replace(/[^0-9.\-]/g, '');
        const n = parseFloat(s);
        return isNaN(n) ? 0 : n;
    };

    const parseDateDMY = (s: string): Date | null => {
        if (!s) return null;
        if (/\d{2}\/\d{2}\/\d{4}/.test(s)) {
            const [dd, mm, yy] = s.split('/');
            return new Date(Number(yy), Number(mm) - 1, Number(dd));
        }
        const d = new Date(s);
        return isNaN(d.getTime()) ? null : d;
    };

    const formatCurrency = (v: number): string => {
        return "$" + Number(v || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
    };

    const getField = (obj: RMAItem, candidates: string[]): string => {
        for (const k of candidates) {
            if (k in obj && obj[k] !== "" && obj[k] != null) return String(obj[k]);
            const matched = Object.keys(obj).find(x => x.toLowerCase() === k.toLowerCase());
            if (matched && obj[matched] !== "" && obj[matched] != null) return String(obj[matched]);
        }
        return "Unknown";
    };

    const countNonEmptyIMEI = (row: RMAItem): number => {
        const imeiValue = getField(row, ['Customer IMEI', 'IMEI', 'imei', 'CUSTOMER IMEI']);
        return imeiValue && String(imeiValue).trim() !== '' && imeiValue !== 'Unknown' ? 1 : 0;
    };

    // Data fetching and processing
    const fetchCSV = async (url: string): Promise<RMAItem[]> => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('fetch error ' + res.status);
            const txt = await res.text();

            // Parse CSV using PapaParse logic
            const lines = txt.split('\n').filter(line => line.trim());
            if (lines.length < 2) return [];

            const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
            const data = lines.slice(1).map(line => {
                const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
                const obj: RMAItem = {};
                headers.forEach((header, index) => {
                    obj[header] = values[index] || '';
                });
                return obj;
            }).filter(row => Object.values(row).some(val => val !== ''));

            return data;
        } catch (err) {
            console.warn('Fetching CSV failed:', err);
            return [];
        }
    };

    const applyFilters = (data: RMAItem[]): RMAItem[] => {
        const from = fromDate ? new Date(fromDate) : null;
        const to = toDate ? new Date(toDate) : null;
        if (!from && !to) return data;

        return data.filter(row => {
            const raw = getField(row, ['Processed Date', 'ProcessedDate', 'Processed_Date']);
            const d = parseDateDMY(raw);
            if (!d) return false;
            if (from && d < from) return false;
            if (to) {
                const toEnd = new Date(to.getFullYear(), to.getMonth(), to.getDate(), 23, 59, 59);
                if (d > toEnd) return false;
            }
            return true;
        });
    };

    const aggregate = (data: RMAItem[], keyField: string): AggregatedGroup[] => {
        const groups: { [key: string]: { count: number; devices: number; cost: number; daysSet: Set<string>; rows: RMAItem[] } } = {};

        data.forEach(row => {
            const keyRaw = getField(row, [keyField, keyField.toUpperCase(), keyField.toLowerCase()]);
            const key = String(keyRaw || 'Unknown').trim() || 'Unknown';
            if (!groups[key]) groups[key] = { count: 0, devices: 0, cost: 0, daysSet: new Set(), rows: [] };

            groups[key].count += 1;
            groups[key].devices += countNonEmptyIMEI(row);
            groups[key].cost += parseCurrency(getField(row, ['COST', 'Cost', 'cost']));

            const daysVal = getField(row, ['Days', 'DAY', 'day']);
            if (daysVal && daysVal !== 'Unknown') groups[key].daysSet.add(String(daysVal).trim());
            groups[key].rows.push(row);
        });

        return Object.keys(groups).map(k => ({
            key: k,
            count: groups[k].count,
            devices: groups[k].devices,
            cost: groups[k].cost,
            days: Array.from(groups[k].daysSet),
            rows: groups[k].rows
        })).sort((a, b) => b.cost - a.cost);
    };

    const detectKey = (candidates: string[]): string => {
        if (!filteredData || filteredData.length === 0) return candidates[0];

        for (const candidate of candidates) {
            const hasKey = filteredData.some(row => {
                const value = getField(row, [candidate]);
                return value && value !== 'Unknown' && value !== '';
            });
            if (hasKey) return candidate;
        }

        return candidates[0];
    };

    // UI rendering functions
    const buildSummaryCards = (data: RMAItem[]) => {
        const totalLabels = data.length;
        const totalDevices = data.reduce((s, r) => s + countNonEmptyIMEI(r), 0);
        const totalCost = data.reduce((s, r) => s + parseCurrency(getField(r, ['COST', 'Cost', 'cost'])), 0);

        const cards = [
            { label: 'Total Labels', value: totalLabels },
            { label: 'Total Devices', value: totalDevices },
            { label: 'Total Cost', value: formatCurrency(totalCost) }
        ];

        return cards;
    };

    const initData = async () => {
        setIsLoadingData(true);
        const data = await fetchCSV(sheetUrl);
        if (data && data.length > 0) {
            setRawData(data);
            const filtered = applyFilters(data);
            setFilteredData(filtered);
            setCurrentData(filtered);

            // Set default dates
            const dateVals = data.map(r => parseDateDMY(getField(r, ['Processed Date', 'ProcessedDate']))).filter(Boolean) as Date[];
            if (dateVals.length) {
                const minD = new Date(Math.min(...dateVals.map(d => d.getTime())));
                const maxD = new Date(Math.max(...dateVals.map(d => d.getTime())));
                setFromDate(minD.toISOString().slice(0, 10));
                setToDate(maxD.toISOString().slice(0, 10));
            }

            setHistoryStack([{ level: 'Regions' }]);
        } else {
            setFilteredData([]);
            setCurrentData([]);
        }
        setIsLoadingData(false);
    };

    const handleApplyFilters = () => {
        const filtered = applyFilters(rawData);
        setFilteredData(filtered);
        setCurrentData(filtered);
        setCurrentView('regions');
        setHistoryStack([{ level: 'Regions' }]);
        setSelectedRegion('');
        setSelectedMarket('');
        setSelectedDM('');
        setSelectedType('');
    };

    const handleResetFilters = () => {
        setFromDate('');
        setToDate('');
        setFilteredData(rawData);
        setCurrentData(rawData);
        setCurrentView('regions');
        setHistoryStack([{ level: 'Regions' }]);
        setSelectedRegion('');
        setSelectedMarket('');
        setSelectedDM('');
        setSelectedType('');
    };

    const handleSheetUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrl = e.target.value.trim();
        setSheetUrl(newUrl);
        setIsLoadingData(true);
        const newData = await fetchCSV(newUrl);
        if (newData && newData.length) {
            setRawData(newData);
            const filtered = applyFilters(newData);
            setFilteredData(filtered);
            setCurrentData(filtered);
            setCurrentView('regions');
            setHistoryStack([{ level: 'Regions' }]);
        }
        setIsLoadingData(false);
    };

    const handleExportCSV = () => {
        if (!filteredData.length) return;

        const keys = Object.keys(filteredData[0]);
        const csv = [keys.join(',')].concat(
            filteredData.map(r => keys.map(k => `"${String(r[k] || '').replace(/"/g, '""')}"`).join(','))
        ).join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tradeins_export.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Drill-down handlers
    const handleRegionClick = (region: AggregatedGroup) => {
        const marketData = region.rows;
        setCurrentData(marketData);
        setCurrentView('market');
        setSelectedRegion(region.key);
        setHistoryStack([
            { level: 'Regions' },
            { level: 'Market', selected: region.key }
        ]);
    };

    const handleMarketClick = (market: AggregatedGroup) => {
        const dmData = market.rows;
        setCurrentData(dmData);
        setCurrentView('dm');
        setSelectedMarket(market.key);
        setHistoryStack([
            { level: 'Regions' },
            { level: 'Market', selected: selectedRegion },
            { level: 'DM', selected: market.key }
        ]);
    };

    const handleDMClick = (dm: AggregatedGroup) => {
        const typeData = dm.rows;
        setCurrentData(typeData);
        setCurrentView('type');
        setSelectedDM(dm.key);
        setHistoryStack([
            { level: 'Regions' },
            { level: 'Market', selected: selectedRegion },
            { level: 'DM', selected: selectedMarket },
            { level: 'Type', selected: dm.key }
        ]);
    };

    const handleTypeClick = (type: AggregatedGroup) => {
        const detailedData = type.rows;
        setCurrentData(detailedData);
        setCurrentView('detailed');
        setSelectedType(type.key);
        setHistoryStack([
            { level: 'Regions' },
            { level: 'Market', selected: selectedRegion },
            { level: 'DM', selected: selectedMarket },
            { level: 'Type', selected: selectedDM },
            { level: 'Detailed', selected: type.key }
        ]);
    };

    const handleBackClick = () => {
        if (historyStack.length <= 1) {
            setCurrentData(filteredData);
            setCurrentView('regions');
            setHistoryStack([{ level: 'Regions' }]);
            setSelectedRegion('');
            setSelectedMarket('');
            setSelectedDM('');
            setSelectedType('');
        } else {
            const newStack = historyStack.slice(0, -1);
            setHistoryStack(newStack);

            const previousLevel = newStack[newStack.length - 1];

            if (previousLevel.level === 'Regions') {
                setCurrentData(filteredData);
                setCurrentView('regions');
                setSelectedRegion('');
            } else if (previousLevel.level === 'Market') {
                const regionKey = detectKey(['Regions', 'Region', 'REGIONS', 'regions']);
                const regionData = filteredData.filter(row =>
                    getField(row, [regionKey]) === previousLevel.selected
                );
                setCurrentData(regionData);
                setCurrentView('market');
                setSelectedMarket('');
            } else if (previousLevel.level === 'DM') {
                const regionKey = detectKey(['Regions', 'Region', 'REGIONS', 'regions']);
                const marketKey = detectKey(['Market', 'Market Name', 'Market Name ', 'MARKET']);
                const dmData = filteredData.filter(row =>
                    getField(row, [regionKey]) === selectedRegion &&
                    getField(row, [marketKey]) === previousLevel.selected
                );
                setCurrentData(dmData);
                setCurrentView('dm');
                setSelectedDM('');
            } else if (previousLevel.level === 'Type') {
                const regionKey = detectKey(['Regions', 'Region', 'REGIONS', 'regions']);
                const marketKey = detectKey(['Market', 'Market Name', 'Market Name ', 'MARKET']);
                const dmKey = detectKey(['DM NAME', 'DM Name', 'DM', 'Dm Name']);
                const typeData = filteredData.filter(row =>
                    getField(row, [regionKey]) === selectedRegion &&
                    getField(row, [marketKey]) === selectedMarket &&
                    getField(row, [dmKey]) === previousLevel.selected
                );
                setCurrentData(typeData);
                setCurrentView('type');
                setSelectedType('');
            }
        }
    };

    const renderBreadcrumb = () => {
        return historyStack.map((item, index) => (
            <span key={index} className="text-gray-600">
                {item.selected ? `${item.level} — ${item.selected}` : item.level}
                {index < historyStack.length - 1 && (
                    <span className="mx-2 text-gray-400">›</span>
                )}
            </span>
        ));
    };

    const renderTable = (data: RMAItem[], level: string, onRowClick: (group: AggregatedGroup) => void) => {
        let keyField = '';
        let title = '';

        switch (level) {
            case 'regions':
                keyField = detectKey(['Regions', 'Region', 'REGIONS', 'regions']);
                title = 'Regions';
                break;
            case 'market':
                keyField = detectKey(['Market', 'Market Name', 'Market Name ', 'MARKET']);
                title = 'Markets';
                break;
            case 'dm':
                keyField = detectKey(['DM NAME', 'DM Name', 'DM', 'Dm Name']);
                title = 'DMs';
                break;
            case 'type':
                keyField = detectKey(['Type', 'TYPE', 'type']);
                title = 'Types';
                break;
            case 'detailed':
                return renderDetailedTable(data);
            default:
                keyField = 'Unknown';
                title = 'Data';
        }

        const aggregated = aggregate(data, keyField);
        const maxCost = Math.max(...aggregated.map(a => a.cost), 1);

        return (
            <div className="table-block">
                <div className="table-header">
                    <h2>{title}</h2>
                    <div className="meta">
                        {aggregated.length} groups — total cost {formatCurrency(aggregated.reduce((s, a) => s + a.cost, 0))}
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>{keyField}</th>
                                <th className="col-right">Count</th>
                                <th className="col-right">Devices</th>
                                <th className="col-right">Total Cost</th>
                                <th>Days</th>
                                <th style={{ width: '36%' }}>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aggregated.map((group, index) => {
                                const pct = Math.round((group.cost / maxCost) * 100);
                                const fillClass = pct >= 70 ? 'green' : pct >= 40 ? 'amber' : 'red';

                                return (
                                    <tr
                                        key={index}
                                        onClick={() => onRowClick(group)}
                                    >
                                        <td>{group.key}</td>
                                        <td className="col-right">{group.count}</td>
                                        <td className="col-right">{group.devices}</td>
                                        <td className="col-right">{formatCurrency(group.cost)}</td>
                                        <td>
                                            {group.days.map((day, i) => (
                                                <span key={i} className="days-pill">
                                                    {day}
                                                </span>
                                            ))}
                                        </td>
                                        <td>
                                            <div className="bar-cell">
                                                <div className="bar-track">
                                                    <div
                                                        className={`bar-fill ${fillClass}`}
                                                        style={{ width: `${pct}%` }}
                                                    ></div>
                                                </div>
                                                <div style={{ minWidth: '52px', textAlign: 'right' }}>{pct}%</div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const renderDetailedTable = (data: RMAItem[]) => {
        return (
            <div className="table-block">
                <div className="table-header">
                    <h2>Detailed — {selectedType}</h2>
                    <div className="meta">
                        {data.length} rows
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Processed Date</th>
                                <th>Market</th>
                                <th>DM NAME</th>
                                <th>Type</th>
                                <th className="col-right">Devices</th>
                                <th className="col-right">Cost</th>
                                <th>Days</th>
                                <th>Assurant Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => {
                                const processedDate = getField(row, ['Processed Date', 'ProcessedDate']);
                                const market = getField(row, ['Market', 'Market Name']);
                                const dm = getField(row, ['DM NAME', 'DM Name']);
                                const type = getField(row, ['Type', 'TYPE']);
                                const devices = countNonEmptyIMEI(row);
                                const cost = formatCurrency(parseCurrency(getField(row, ['COST', 'Cost'])));
                                const days = getField(row, ['Days', 'DAY', 'day']);
                                const assurant = getField(row, ['Assurant Status', 'Assurant_STATUS', 'Assurant', 'assurant']);

                                return (
                                    <tr key={index}>
                                        <td>{processedDate}</td>
                                        <td>{market}</td>
                                        <td>{dm}</td>
                                        <td>{type}</td>
                                        <td className="col-right">{devices}</td>
                                        <td className="col-right">{cost}</td>
                                        <td>
                                            {days && days !== 'Unknown' && (
                                                <span className="days-pill">{days}</span>
                                            )}
                                        </td>
                                        <td>{assurant}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const summaryCards = buildSummaryCards(filteredData);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--bg-start) 0%, var(--bg-mid) 40%, var(--bg-end) 100%)' }}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return (
        <div className="app">
            <header className="topbar">
                <div className="brand">
                    <div className="logo">⚡</div>
                    <div className="title">
                        <div className="main">RMA Dashboard</div>
                    </div>
                </div>

                <div className="controls">
                    <input
                        id="sheet-url"
                        className="input-url"
                        type="text"
                        value={sheetUrl}
                        onChange={handleSheetUrlChange}
                        placeholder="Google Sheet CSV URL"
                    />
                    <input
                        id="from-date"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <input
                        id="to-date"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <button id="apply-filters" className="btn btn-primary" onClick={handleApplyFilters}>
                        Apply
                    </button>
                    <button id="reset-filters" className="btn" onClick={handleResetFilters}>
                        Reset
                    </button>
                    <div className="exports">
                        <button id="downloadCSV" className="btn btn-success" onClick={handleExportCSV}>
                            Export CSV
                        </button>
                    </div>
                </div>
            </header>

            <main className="main-area">
                <section id="summary-cards" className="kpi-row">
                    {summaryCards.map((card, index) => (
                        <div key={index} className="kpi">
                            <div className="label">{card.label}</div>
                            <div className="value">{card.value}</div>
                        </div>
                    ))}
                </section>

                <div className="nav-row">
                    <button
                        id="btn-back"
                        className={`btn back ${historyStack.length <= 1 ? 'hidden' : ''}`}
                        onClick={handleBackClick}
                    >
                        ← Back
                    </button>
                    <div id="breadcrumb" className="breadcrumb">
                        {renderBreadcrumb()}
                    </div>
                </div>

                <section id="stacked-container" className="stacked">
                    {currentView === 'regions' && renderTable(currentData, 'regions', handleRegionClick)}
                    {currentView === 'market' && renderTable(currentData, 'market', handleMarketClick)}
                    {currentView === 'dm' && renderTable(currentData, 'dm', handleDMClick)}
                    {currentView === 'type' && renderTable(currentData, 'type', handleTypeClick)}
                    {currentView === 'detailed' && renderDetailedTable(currentData)}
                </section>
            </main>

            {/* Loading State */}
            {isLoadingData && (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            )}

            {/* RMA Dashboard Specific Styles */}
            <style jsx global>{`
        /* RMA Dashboard Specific CSS - Don't interfere with other pages */
        .app {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          background: linear-gradient(135deg, #07122a 0%, #0e2740 40%, #f6fbff 100%);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #273043;
          line-height: 1.6;
        }

        .topbar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }

        .brand {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .logo {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #5b6ef6, #00c2ff);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 20px;
          box-shadow: 0 10px 30px rgba(91,110,246,0.18);
        }

        .title .main {
          font-weight: 700;
          color: #5b6ef6;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .controls {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .input-url {
          min-width: 420px;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(14,39,64,0.06);
          background: rgba(255,255,255,0.75);
          color: #273043;
          font-size: 0.95rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .input-url:focus {
          outline: none;
          border-color: #5b6ef6;
          box-shadow: 0 0 0 4px rgba(91,110,246,0.08);
          transform: translateY(-1px);
        }

        input[type="date"] {
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(14,39,64,0.06);
          background: rgba(255,255,255,0.75);
          color: #273043;
          font-size: 0.95rem;
          backdrop-filter: blur(10px);
        }

        .btn {
          padding: 10px 20px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, rgba(39,48,67,0.06), rgba(39,48,67,0.08));
          color: #273043;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.28s ease;
          box-shadow: 0 6px 18px rgba(11,27,78,0.06);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(11,27,78,0.12);
        }

        .btn-primary {
          background: linear-gradient(135deg, #5b6ef6, #00c2ff);
          color: white;
        }

        .btn-success {
          background: linear-gradient(135deg, #8a5cf6, #5b6ef6);
          color: white;
        }

        .exports {
          margin-left: auto;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .kpi-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .kpi {
          background: rgba(255,255,255,0.75);
          padding: 24px;
          border-radius: 12px;
          min-width: 220px;
          flex: 1 1 260px;
          box-shadow: 0 12px 40px rgba(11,27,78,0.12);
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .kpi:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 48px rgba(91,110,246,0.12);
        }

        .kpi .label {
          color: #6b7280;
          font-size: 0.9rem;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .kpi .value {
          font-size: 1.75rem;
          color: #8a5cf6;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .nav-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .breadcrumb {
          color: #6b7280;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .back {
          background: linear-gradient(135deg, rgba(39,48,67,0.9), rgba(32,36,50,0.95));
          color: white;
        }

        .hidden {
          display: none;
        }

        .stacked {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .table-block {
          background: rgba(255,255,255,0.75);
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(11,27,78,0.12);
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .table-header h2 {
          margin: 0;
          color: #8a5cf6;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }

        .table-header .meta {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }

        .table th, .table td {
          padding: 16px 20px;
          text-align: left;
          border-bottom: 1px solid rgba(230, 233, 244, 0.8);
        }

        .table th {
          font-weight: 600;
          color: #5b6ef6;
          background: rgba(91,110,246,0.06);
        }

        .table tbody tr {
          transition: all 0.28s ease;
          cursor: pointer;
        }

        .table tbody tr:hover {
          background: rgba(91,110,246,0.04);
          transform: translateX(4px);
          box-shadow: 0 6px 20px rgba(11,27,78,0.06);
        }

        .col-right {
          text-align: right;
        }

        .bar-cell {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .bar-track {
          height: 10px;
          background: rgba(230, 233, 244, 0.8);
          border-radius: 10px;
          flex: 1;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
        }

        .bar-fill {
          height: 100%;
          width: 0;
          border-radius: 10px;
          transition: width 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .bar-fill.green {
          background: linear-gradient(90deg, #21c47b, #1da56d);
        }

        .bar-fill.amber {
          background: linear-gradient(90deg, #f7b731, #e6a700);
        }

        .bar-fill.red {
          background: linear-gradient(90deg, #ff4757, #e84118);
        }

        .days-pill {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(91,110,246,0.10);
          color: #8a5cf6;
          font-size: 0.8rem;
          font-weight: 500;
          margin-right: 6px;
          border: 1px solid rgba(91,110,246,0.14);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .app {
            padding: 16px;
          }
          
          .input-url {
            min-width: unset;
            width: 100%;
          }
          
          .controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .kpi-row {
            flex-direction: column;
            gap: 16px;
          }
          
          .table th, .table td {
            padding: 12px 16px;
          }
          
          .exports {
            margin-left: 0;
            justify-content: flex-start;
          }
          
          .logo {
            width: 48px;
            height: 48px;
            font-size: 18px;
          }
          
          .table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .table {
            min-width: 600px;
          }
        }
      `}</style>
        </div>
    );
}