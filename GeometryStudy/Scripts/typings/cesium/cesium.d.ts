declare namespace Cesium {

    //type alias
    type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
    type HMDVRDevice = any;
    type RenderState = any;
    type CanvasPixelArray = Uint8ClampedArray;
    type PropertyOrValue<T> = Property<T> | T;

    export class Animation {
        constructor(container: Element | string, viewModel: AnimationViewModel);
        //Members
        container: Element;
        viewModel: AnimationViewModel;


        //Methods
        applyThemeChanges(): void;
        destroy(): void;
        isDestroyed(): boolean;
        resize(): void;

    }


    export class AnimationViewModel {
        constructor(clockViewModel: ClockViewModel);
        //Members
        static defaultDateFormatter: any;
        static defaultTicks: Array<number>;
        static defaultTimeFormatter: any;
        clockViewModel: ClockViewModel;
        dateFormatter: any;
        dateLabel: string;
        faster: Command;
        multiplierLabel: string;
        pauseViewModel: ToggleButtonViewModel;
        playForwardViewModel: ToggleButtonViewModel;
        playRealtimeViewModel: ToggleButtonViewModel;
        playReverseViewModel: ToggleButtonViewModel;
        shuttleRingAngle: number;
        shuttleRingDragging: boolean;
        slower: Command;
        snapToTicks: boolean;
        timeFormatter: any;
        timeLabel: string;


        //Methods
        getShuttleRingTicks(): Array<number>;
        setShuttleRingTicks(positiveTicks: Array<number>): void;

    }


    export class ClockViewModel {
        constructor(clock?: Clock);
        //Members
        canAnimate: boolean;
        clock: Clock;
        clockRange: ClockRange;
        clockStep: ClockStep;
        currentTime: JulianDate;
        multiplier: number;
        shouldAnimate: boolean;
        startTime: JulianDate;
        stopTime: JulianDate;
        systemTime: JulianDate;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        synchronize(): void;

    }


    export class Clock {
        constructor(options?: ClockOptions);
        //Members
        canAnimate: boolean;
        clockRange: ClockRange;
        clockStep: ClockStep;
        currentTime: JulianDate;
        multiplier: number;
        onTick: Event;
        shouldAnimate: boolean;
        startTime: JulianDate;
        stopTime: JulianDate;


        //Methods
        tick(): JulianDate;

    }


    export class JulianDate {
        constructor(julianDayNumber?: number, secondsOfDay?: number, timeStandard?: TimeStandard);
        //Members
        static leapSeconds: Array<LeapSecond>;
        dayNumber: number;
        secondsOfDay: number;


        //Methods
        static addDays(julianDate: JulianDate, days: number, result: JulianDate): JulianDate;
        static addHours(julianDate: JulianDate, hours: number, result: JulianDate): JulianDate;
        static addMinutes(julianDate: JulianDate, minutes: number, result: JulianDate): JulianDate;
        static addSeconds(julianDate: JulianDate, seconds: number, result: JulianDate): JulianDate;
        static clone(julianDate: JulianDate, result?: JulianDate): JulianDate;
        static compare(left: JulianDate, right: JulianDate): number;
        static computeTaiMinusUtc(julianDate: JulianDate): number;
        static daysDifference(left: JulianDate, right: JulianDate): number;
        static equals(left?: JulianDate, right?: JulianDate): boolean;
        static equalsEpsilon(left?: JulianDate, right?: JulianDate, epsilon?: number): boolean;
        static fromDate(date: Date, result?: JulianDate): JulianDate;
        static fromIso8601(iso8601String: string, result?: JulianDate): JulianDate;
        static greaterThan(left: JulianDate, right: JulianDate): boolean;
        static greaterThanOrEquals(left: JulianDate, right: JulianDate): boolean;
        static lessThan(left: JulianDate, right: JulianDate): boolean;
        static lessThanOrEquals(left: JulianDate, right: JulianDate): boolean;
        static now(result?: JulianDate): JulianDate;
        static secondsDifference(left: JulianDate, right: JulianDate): number;
        static toDate(julianDate: JulianDate): Date;
        static toGregorianDate(julianDate: JulianDate, result?: GregorianDate): GregorianDate;
        static toIso8601(julianDate: JulianDate, precision?: number): string;
        static totalDays(julianDate: JulianDate): number;
        clone(result?: JulianDate): JulianDate;
        equals(right?: JulianDate): boolean;
        equalsEpsilon(right?: JulianDate, epsilon?: number): boolean;
        toString(): string;

    }


    export class TimeStandard {
        constructor();
        //Members
        static TAI: any;
        static UTC: any;


        //Methods

    }


    export class GregorianDate {
        constructor();
        //Members
        day: number;
        hour: number;
        isLeapSecond: boolean;
        millisecond: number;
        minute: number;
        month: number;
        second: number;
        year: number;


        //Methods

    }


    export class LeapSecond {
        constructor(date?: JulianDate, offset?: number);
        //Members
        julianDate: JulianDate;
        offset: number;


        //Methods

    }


    export class ClockStep {
        constructor();
        //Members
        static SYSTEM_CLOCK: number;
        static SYSTEM_CLOCK_MULTIPLIER: number;
        static TICK_DEPENDENT: number;


        //Methods

    }


    export class ClockRange {
        constructor();
        //Members
        static CLAMPED: number;
        static LOOP_STOP: number;
        static UNBOUNDED: number;


        //Methods

    }


    export interface ClockOptions {
        startTime?: JulianDate;
        stopTime?: JulianDate;
        currentTime?: JulianDate;
        multiplier?: number;
        clockStep?: ClockStep;
        clockRange?: ClockRange;
        canAnimate?: boolean;
        shouldAnimate?: boolean;
    }


    export class Event {
        constructor();
        //Members
        numberOfListeners: number;


        //Methods
        addEventListener(listener: Function, scope?: any): any;
        raiseEvent(args: any): void;
        removeEventListener(listener: Function, scope?: any): boolean;

    }


    export class Command {
        constructor();
        //Members
        afterExecute: Event;
        beforeExecute: Event;
        canExecute: boolean;


        //Methods

    }


    export class ToggleButtonViewModel {
        constructor(command: Command, options?: ToggleButtonViewModelOptions);
        //Members
        command: Command;
        toggled: boolean;
        tooltip: string;


        //Methods

    }


    export interface ToggleButtonViewModelOptions {
        toggled?: boolean;
        tooltip?: string;
    }


    export class Appearance {
        constructor(options?: AppearanceOptions);
        //Members
        closed: boolean;
        fragmentShaderSource: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export class Material {
        constructor(options?: MaterialOptions);
        //Members
        static AlphaMapType: string;
        static BumpMapType: string;
        static CheckerboardType: string;
        static ColorType: string;
        static DefaultCubeMapId: string;
        static DefaultImageId: string;
        static DiffuseMapType: string;
        static DotType: string;
        static EmissionMapType: string;
        static FadeType: string;
        static GridType: string;
        static ImageType: string;
        static NormalMapType: string;
        static PolylineArrowType: string;
        static PolylineGlowType: string;
        static PolylineOutlineType: string;
        static RimLightingType: string;
        static SpecularMapType: string;
        static StripeType: string;
        static WaterType: string;
        materials: Object;
        shaderSource: string;
        translucent: boolean | (() => void);
        type: string;
        uniforms: Object;


        //Methods
        static fromType(type: string, uniforms?: any): Material;
        destroy(): void;
        isDestroyed(): boolean;
        isTranslucent(): void;

    }


    export interface MaterialOptions {
        strict?: boolean;
        translucent?: boolean | (() => void);
        fabric: Object;
    }


    export interface AppearanceOptions {
        translucent?: boolean;
        closed?: boolean;
        material?: Material;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class TerrainProvider {
        constructor();
        //Members
        static heightmapTerrainQuality: number;
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readyPromise: Promise<boolean>;
        tilingScheme: TilingScheme;


        //Methods
        static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid: Ellipsoid, tileImageWidth: number, numberOfTilesAtLevelZero: number): number;
        static getRegularGridIndices(width: number, height: number): Uint16Array;
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, throttleRequests?: boolean): Promise<TerrainData> | void;

    }


    export class Ellipsoid {
        constructor(x?: number, y?: number, z?: number);
        //Members
        static MOON: Ellipsoid;
        static packedLength: number;
        static UNIT_SPHERE: Ellipsoid;
        static WGS84: Ellipsoid;
        maximumRadius: number;
        minimumRadius: number;
        oneOverRadii: Cartesian3;
        oneOverRadiiSquared: Cartesian3;
        radii: Cartesian3;
        radiiSquared: Cartesian3;
        radiiToTheFourth: Cartesian3;


        //Methods
        static clone(ellipsoid: Ellipsoid, result?: Ellipsoid): Ellipsoid;
        static fromCartesian3(radii?: Cartesian3): Ellipsoid;
        static pack(value: Ellipsoid, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: Ellipsoid): Ellipsoid;
        cartesianArrayToCartographicArray(cartesians: Array<Cartesian3>, result?: Array<Cartographic>): Array<Cartographic>;
        cartesianToCartographic(cartesian: Cartesian3, result?: Cartographic): Cartographic;
        cartographicArrayToCartesianArray(cartographics: Array<Cartographic>, result?: Array<Cartesian3>): Array<Cartesian3>;
        cartographicToCartesian(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        clone(result?: Ellipsoid): Ellipsoid;
        equals(right?: Ellipsoid): boolean;
        geocentricSurfaceNormal(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        geodeticSurfaceNormal(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        geodeticSurfaceNormalCartographic(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        scaleToGeocentricSurface(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        scaleToGeodeticSurface(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        toString(): string;
        transformPositionFromScaledSpace(position: Cartesian3, result?: Cartesian3): Cartesian3;
        transformPositionToScaledSpace(position: Cartesian3, result?: Cartesian3): Cartesian3;

    }


    export class Cartesian3 {
        constructor(x?: number, y?: number, z?: number);
        //Members
        x: number;
        y: number;
        z: number;
        static packedLength: number;
        static UNIT_X: Cartesian3;
        static UNIT_Y: Cartesian3;
        static UNIT_Z: Cartesian3;
        static ZERO: Cartesian3;


        //Methods
        clone(result?: Cartesian3): Cartesian3;
        equals(right?: Cartesian3): boolean;
        equalsEpsilon(right?: Cartesian3, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static abs(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static add(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static angleBetween(left: Cartesian3, right: Cartesian3): number;
        static clone(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        static cross(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static distance(left: Cartesian3, right: Cartesian3): number;
        static distanceSquared(left: Cartesian3, right: Cartesian3): number;
        static divideByScalar(cartesian: Cartesian3, scalar: number, result: Cartesian3): Cartesian3;
        static dot(left: Cartesian3, right: Cartesian3): number;
        static equals(left?: Cartesian3, right?: Cartesian3): boolean;
        static equalsEpsilon(left?: Cartesian3, right?: Cartesian3, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Cartesian3): Cartesian3;
        static fromCartesian4(cartesian: Cartesian4, result?: Cartesian3): Cartesian3;
        static fromDegrees(longitude: number, latitude: number, height?: number, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        static fromDegreesArray(coordinates: Array<number>, ellipsoid?: Ellipsoid, result?: Array<Cartesian3>): Array<Cartesian3>;
        static fromDegreesArrayHeights(coordinates: Array<number>, ellipsoid?: Ellipsoid, result?: Array<Cartesian3>): Array<Cartesian3>;
        static fromElements(x: number, y: number, z: number, result?: Cartesian3): Cartesian3;
        static fromRadians(longitude: number, latitude: number, height?: number, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        static fromRadiansArray(coordinates: Array<number>, ellipsoid?: Ellipsoid, result?: Array<Cartesian3>): Array<Cartesian3>;
        static fromRadiansArrayHeights(coordinates: Array<number>, ellipsoid?: Ellipsoid, result?: Array<Cartesian3>): Array<Cartesian3>;
        static fromSpherical(spherical: Spherical, result?: Cartesian3): Cartesian3;
        static lerp(start: Cartesian3, end: Cartesian3, t: number, result: Cartesian3): Cartesian3;
        static magnitude(cartesian: Cartesian3): number;
        static magnitudeSquared(cartesian: Cartesian3): number;
        static maximumByComponent(first: Cartesian3, second: Cartesian3, result: Cartesian3): Cartesian3;
        static maximumComponent(cartesian: Cartesian3): number;
        static minimumByComponent(first: Cartesian3, second: Cartesian3, result: Cartesian3): Cartesian3;
        static minimumComponent(cartesian: Cartesian3): number;
        static mostOrthogonalAxis(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByScalar(cartesian: Cartesian3, scalar: number, result: Cartesian3): Cartesian3;
        static multiplyComponents(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static negate(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static normalize(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static pack(value: Cartesian3, array: Array<number>, startingIndex?: number): Array<number>;
        static packArray(array: Array<Cartesian3>, result: Array<number>): Array<number>;
        static subtract(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static unpack(array: Array<number>, startingIndex?: number, result?: Cartesian3): Cartesian3;
        static unpackArray(array: Array<number>, result: Array<Cartesian3>): Array<Cartesian3>;

    }


    export class Cartesian4 {
        constructor(x?: number, y?: number, z?: number, w?: number);
        //Members
        w: number;
        x: number;
        y: number;
        z: number;
        static packedLength: number;
        static UNIT_W: Cartesian4;
        static UNIT_X: Cartesian4;
        static UNIT_Y: Cartesian4;
        static UNIT_Z: Cartesian4;
        static ZERO: Cartesian4;


        //Methods
        clone(result?: Cartesian4): Cartesian4;
        equals(right?: Cartesian4): boolean;
        equalsEpsilon(right?: Cartesian4, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static abs(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static add(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static clone(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        static distance(left: Cartesian4, right: Cartesian4): number;
        static distanceSquared(left: Cartesian4, right: Cartesian4): number;
        static divideByScalar(cartesian: Cartesian4, scalar: number, result: Cartesian4): Cartesian4;
        static dot(left: Cartesian4, right: Cartesian4): number;
        static equals(left?: Cartesian4, right?: Cartesian4): boolean;
        static equalsEpsilon(left?: Cartesian4, right?: Cartesian4, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Cartesian4): Cartesian4;
        static fromColor(color: Color, result?: Cartesian4): Cartesian4;
        static fromElements(x: number, y: number, z: number, w: number, result?: Cartesian4): Cartesian4;
        static lerp(start: Cartesian4, end: Cartesian4, t: number, result: Cartesian4): Cartesian4;
        static magnitude(cartesian: Cartesian4): number;
        static magnitudeSquared(cartesian: Cartesian4): number;
        static maximumByComponent(first: Cartesian4, second: Cartesian4, result: Cartesian4): Cartesian4;
        static maximumComponent(cartesian: Cartesian4): number;
        static minimumByComponent(first: Cartesian4, second: Cartesian4, result: Cartesian4): Cartesian4;
        static minimumComponent(cartesian: Cartesian4): number;
        static mostOrthogonalAxis(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static multiplyByScalar(cartesian: Cartesian4, scalar: number, result: Cartesian4): Cartesian4;
        static multiplyComponents(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static negate(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static normalize(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static pack(value: Cartesian4, array: Array<number>, startingIndex?: number): Array<number>;
        static packArray(array: Array<Cartesian4>, result: Array<number>): Array<number>;
        static subtract(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static unpack(array: Array<number>, startingIndex?: number, result?: Cartesian4): Cartesian4;
        static unpackArray(array: Array<number>, result: Array<Cartesian4>): Array<Cartesian4>;

    }


    export class Color {
        constructor(red?: number, green?: number, blue?: number, alpha?: number);
        //Members
        static ALICEBLUE: Color;
        static ANTIQUEWHITE: Color;
        static AQUA: Color;
        static AQUAMARINE: Color;
        static AZURE: Color;
        static BEIGE: Color;
        static BISQUE: Color;
        static BLACK: Color;
        static BLANCHEDALMOND: Color;
        static BLUE: Color;
        static BLUEVIOLET: Color;
        static BROWN: Color;
        static BURLYWOOD: Color;
        static CADETBLUE: Color;
        static CHARTREUSE: Color;
        static CHOCOLATE: Color;
        static CORAL: Color;
        static CORNFLOWERBLUE: Color;
        static CORNSILK: Color;
        static CRIMSON: Color;
        static CYAN: Color;
        static DARKBLUE: Color;
        static DARKCYAN: Color;
        static DARKGOLDENROD: Color;
        static DARKGRAY: Color;
        static DARKGREEN: Color;
        static DARKGREY: Color;
        static DARKKHAKI: Color;
        static DARKMAGENTA: Color;
        static DARKOLIVEGREEN: Color;
        static DARKORANGE: Color;
        static DARKORCHID: Color;
        static DARKRED: Color;
        static DARKSALMON: Color;
        static DARKSEAGREEN: Color;
        static DARKSLATEBLUE: Color;
        static DARKSLATEGRAY: Color;
        static DARKSLATEGREY: Color;
        static DARKTURQUOISE: Color;
        static DARKVIOLET: Color;
        static DEEPPINK: Color;
        static DEEPSKYBLUE: Color;
        static DIMGRAY: Color;
        static DIMGREY: Color;
        static DODGERBLUE: Color;
        static FIREBRICK: Color;
        static FLORALWHITE: Color;
        static FORESTGREEN: Color;
        static FUSCHIA: Color;
        static GAINSBORO: Color;
        static GHOSTWHITE: Color;
        static GOLD: Color;
        static GOLDENROD: Color;
        static GRAY: Color;
        static GREEN: Color;
        static GREENYELLOW: Color;
        static GREY: Color;
        static HONEYDEW: Color;
        static HOTPINK: Color;
        static INDIANRED: Color;
        static INDIGO: Color;
        static IVORY: Color;
        static KHAKI: Color;
        static LAVENDAR_BLUSH: Color;
        static LAVENDER: Color;
        static LAWNGREEN: Color;
        static LEMONCHIFFON: Color;
        static LIGHTBLUE: Color;
        static LIGHTCORAL: Color;
        static LIGHTCYAN: Color;
        static LIGHTGOLDENRODYELLOW: Color;
        static LIGHTGRAY: Color;
        static LIGHTGREEN: Color;
        static LIGHTGREY: Color;
        static LIGHTPINK: Color;
        static LIGHTSEAGREEN: Color;
        static LIGHTSKYBLUE: Color;
        static LIGHTSLATEGRAY: Color;
        static LIGHTSLATEGREY: Color;
        static LIGHTSTEELBLUE: Color;
        static LIGHTYELLOW: Color;
        static LIME: Color;
        static LIMEGREEN: Color;
        static LINEN: Color;
        static MAGENTA: Color;
        static MAROON: Color;
        static MEDIUMAQUAMARINE: Color;
        static MEDIUMBLUE: Color;
        static MEDIUMORCHID: Color;
        static MEDIUMPURPLE: Color;
        static MEDIUMSEAGREEN: Color;
        static MEDIUMSLATEBLUE: Color;
        static MEDIUMSPRINGGREEN: Color;
        static MEDIUMTURQUOISE: Color;
        static MEDIUMVIOLETRED: Color;
        static MIDNIGHTBLUE: Color;
        static MINTCREAM: Color;
        static MISTYROSE: Color;
        static MOCCASIN: Color;
        static NAVAJOWHITE: Color;
        static NAVY: Color;
        static OLDLACE: Color;
        static OLIVE: Color;
        static OLIVEDRAB: Color;
        static ORANGE: Color;
        static ORANGERED: Color;
        static ORCHID: Color;
        static packedLength: number;
        static PALEGOLDENROD: Color;
        static PALEGREEN: Color;
        static PALETURQUOISE: Color;
        static PALEVIOLETRED: Color;
        static PAPAYAWHIP: Color;
        static PEACHPUFF: Color;
        static PERU: Color;
        static PINK: Color;
        static PLUM: Color;
        static POWDERBLUE: Color;
        static PURPLE: Color;
        static RED: Color;
        static ROSYBROWN: Color;
        static ROYALBLUE: Color;
        static SADDLEBROWN: Color;
        static SALMON: Color;
        static SANDYBROWN: Color;
        static SEAGREEN: Color;
        static SEASHELL: Color;
        static SIENNA: Color;
        static SILVER: Color;
        static SKYBLUE: Color;
        static SLATEBLUE: Color;
        static SLATEGRAY: Color;
        static SLATEGREY: Color;
        static SNOW: Color;
        static SPRINGGREEN: Color;
        static STEELBLUE: Color;
        static TAN: Color;
        static TEAL: Color;
        static THISTLE: Color;
        static TOMATO: Color;
        static TRANSPARENT: Color;
        static TURQUOISE: Color;
        static VIOLET: Color;
        static WHEAT: Color;
        static WHITE: Color;
        static WHITESMOKE: Color;
        static YELLOW: Color;
        static YELLOWGREEN: Color;
        alpha: number;
        blue: number;
        green: number;
        red: number;


        //Methods
        static add(left: Color, right: Color, result: Color): Color;
        static byteToFloat(number: number): number;
        static clone(color: Color, result?: Color): Color;
        static divide(left: Color, right: Color, result: Color): Color;
        static divideByScalar(color: Color, scalar: number, result: Color): Color;
        static equals(left: Color, right: Color): boolean;
        static floatToByte(number: number): number;
        static fromAlpha(color: Color, alpha: number, result?: Color): Color;
        static fromBytes(red?: number, green?: number, blue?: number, alpha?: number, result?: Color): Color;
        static fromCartesian4(cartesian: Cartesian4, result?: Color): Color;
        static fromCssColorString(color: string, result?: Color): Color;
        static fromHsl(hue?: number, saturation?: number, lightness?: number, alpha?: number, result?: Color): Color;
        static fromRandom(options?: fromRandomOptions, result?: Color): Color;
        static fromRgba(rgba: number, result?: Color): Color;
        static mod(left: Color, right: Color, result: Color): Color;
        static multiply(left: Color, right: Color, result: Color): Color;
        static multiplyByScalar(color: Color, scalar: number, result: Color): Color;
        static pack(value: Color, array: Array<number>, startingIndex?: number): Array<number>;
        static subtract(left: Color, right: Color, result: Color): Color;
        static unpack(array: Array<number>, startingIndex?: number, result?: Color): Color;
        brighten(magnitude: number, result: Color): Color;
        clone(result?: Color): Color;
        darken(magnitude: number, result: Color): Color;
        equals(other: Color): boolean;
        equalsEpsilon(other: Color, epsilon?: number): boolean;
        toBytes(result?: Array<number>): Array<number>;
        toCssColorString(): string;
        toRgba(): number;
        toString(): string;
        withAlpha(alpha: number, result?: Color): Color;

    }


    export interface fromRandomOptions {
        red?: number;
        minimumRed?: number;
        maximumRed?: number;
        green?: number;
        minimumGreen?: number;
        maximumGreen?: number;
        blue?: number;
        minimumBlue?: number;
        maximumBlue?: number;
        alpha?: number;
        minimumAlpha?: number;
        maximumAlpha?: number;
    }


    export class Spherical {
        constructor(clock?: number, cone?: number, magnitude?: number);
        //Members


        //Methods
        static clone(spherical: Spherical, result?: Spherical): Spherical;
        static equals(left: Spherical, right: Spherical): boolean;
        static equalsEpsilon(left: Spherical, right: Spherical, epsilon?: number): boolean;
        static fromCartesian3(cartesian3: Cartesian3, spherical?: Spherical): Spherical;
        static normalize(spherical: Spherical, result?: Spherical): Spherical;
        clone(result?: Spherical): Spherical;
        equals(other: Spherical): boolean;
        equalsEpsilon(other: Spherical, epsilon: number): boolean;
        toString(): string;

    }


    export class Cartographic {
        constructor(longitude?: number, latitude?: number, height?: number);
        //Members
        static ZERO: Cartographic;
        height: number;
        latitude: number;
        longitude: number;


        //Methods
        static clone(cartographic: Cartographic, result?: Cartographic): Cartographic;
        static equals(left?: Cartographic, right?: Cartographic): boolean;
        static equalsEpsilon(left?: Cartographic, right?: Cartographic, epsilon?: number): boolean;
        static fromCartesian(cartesian: Cartesian3, ellipsoid?: Ellipsoid, result?: Cartographic): Cartographic;
        static fromDegrees(longitude: number, latitude: number, height?: number, result?: Cartographic): Cartographic;
        static fromRadians(longitude: number, latitude: number, height?: number, result?: Cartographic): Cartographic;
        clone(result?: Cartographic): Cartographic;
        equals(right?: Cartographic): boolean;
        equalsEpsilon(right?: Cartographic, epsilon?: number): boolean;
        toString(): string;

    }


    export class TerrainData {
        constructor();
        //Members
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;


        //Methods
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<TerrainData> | void;
        wasCreatedByUpsampling(): boolean;

    }


    export class Rectangle {
        constructor(west?: number, south?: number, east?: number, north?: number);
        //Members
        static MAX_VALUE: Rectangle;
        static packedLength: number;
        east: number;
        height: number;
        north: number;
        south: number;
        west: number;
        width: number;


        //Methods
        static center(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static clone(rectangle: Rectangle, result?: Rectangle): Rectangle;
        static computeHeight(rectangle: Rectangle): number;
        static computeWidth(rectangle: Rectangle): number;
        static contains(rectangle: Rectangle, cartographic: Cartographic): boolean;
        static equals(left?: Rectangle, right?: Rectangle): boolean;
        static expand(rectangle: Rectangle, cartographic: Cartographic, result?: Rectangle): Rectangle;
        static fromCartesianArray(cartesians: Array<Cartesian3>, ellipsoid?: Ellipsoid, result?: Rectangle): Rectangle;
        static fromCartographicArray(cartographics: Array<Cartographic>, result?: Rectangle): Rectangle;
        static fromDegrees(west?: number, south?: number, east?: number, north?: number, result?: Rectangle): Rectangle;
        static intersection(rectangle: Rectangle, otherRectangle: Rectangle, result?: Rectangle): Rectangle | void;
        static northeast(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static northwest(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static pack(value: Rectangle, array: Array<number>, startingIndex?: number): Array<number>;
        static southeast(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static southwest(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static subsample(rectangle: Rectangle, ellipsoid?: Ellipsoid, surfaceHeight?: number, result?: Array<Cartesian3>): Array<Cartesian3>;
        static union(rectangle: Rectangle, otherRectangle: Rectangle, result?: Rectangle): Rectangle;
        static unpack(array: Array<number>, startingIndex?: number, result?: Rectangle): Rectangle;
        static validate(rectangle: Rectangle): void;
        clone(result?: Rectangle): Rectangle;
        equals(other?: Rectangle): boolean;
        equalsEpsilon(other?: Rectangle, epsilon?: number): boolean;

    }


    export class TilingScheme {
        constructor();
        //Members
        ellipsoid: Ellipsoid;
        projection: MapProjection;
        rectangle: Rectangle;


        //Methods
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;

    }


    export class Cartesian2 {
        constructor(x?: number, y?: number);
        //Members
        x: number;
        y: number;
        static packedLength: number;
        static UNIT_X: Cartesian2;
        static UNIT_Y: Cartesian2;
        static ZERO: Cartesian2;


        //Methods
        clone(result?: Cartesian2): Cartesian2;
        equals(right?: Cartesian2): boolean;
        equalsEpsilon(right?: Cartesian2, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static abs(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static add(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static angleBetween(left: Cartesian2, right: Cartesian2): number;
        static clone(cartesian: Cartesian2, result?: Cartesian2): Cartesian2;
        static distance(left: Cartesian2, right: Cartesian2): number;
        static distanceSquared(left: Cartesian2, right: Cartesian2): number;
        static divideByScalar(cartesian: Cartesian2, scalar: number, result: Cartesian2): Cartesian2;
        static dot(left: Cartesian2, right: Cartesian2): number;
        static equals(left?: Cartesian2, right?: Cartesian2): boolean;
        static equalsEpsilon(left?: Cartesian2, right?: Cartesian2, relativeEpsilon?: number, absoluteEpsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Cartesian2): Cartesian2;
        static fromCartesian3(cartesian: Cartesian3, result?: Cartesian2): Cartesian2;
        static fromCartesian4(cartesian: Cartesian4, result?: Cartesian2): Cartesian2;
        static fromElements(x: number, y: number, result?: Cartesian2): Cartesian2;
        static lerp(start: Cartesian2, end: Cartesian2, t: number, result: Cartesian2): Cartesian2;
        static magnitude(cartesian: Cartesian2): number;
        static magnitudeSquared(cartesian: Cartesian2): number;
        static maximumByComponent(first: Cartesian2, second: Cartesian2, result: Cartesian2): Cartesian2;
        static maximumComponent(cartesian: Cartesian2): number;
        static minimumByComponent(first: Cartesian2, second: Cartesian2, result: Cartesian2): Cartesian2;
        static minimumComponent(cartesian: Cartesian2): number;
        static mostOrthogonalAxis(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static multiplyByScalar(cartesian: Cartesian2, scalar: number, result: Cartesian2): Cartesian2;
        static multiplyComponents(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static negate(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static normalize(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static pack(value: Cartesian2, array: Array<number>, startingIndex?: number): Array<number>;
        static packArray(array: Array<Cartesian2>, result: Array<number>): Array<number>;
        static subtract(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static unpack(array: Array<number>, startingIndex?: number, result?: Cartesian2): Cartesian2;
        static unpackArray(array: Array<number>, result: Array<Cartesian2>): Array<Cartesian2>;

    }


    export class MapProjection {
        constructor();
        //Members
        ellipsoid: Ellipsoid;


        //Methods
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;

    }


    export class Credit {
        constructor(text?: string, imageUrl?: string, link?: string);
        //Members
        imageUrl: string;
        link: string;
        text: string;


        //Methods
        static equals(left: Credit, right: Credit): boolean;
        equals(credits: Credit): boolean;
        hasImage(): boolean;
        hasLink(): boolean;

    }


    export class ArcGisImageServerTerrainProvider implements TerrainProvider {
        constructor(options?: ArcGisImageServerTerrainProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readyPromise: Promise<boolean>;
        tilingScheme: GeographicTilingScheme;


        //Methods
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number): Promise<TerrainData> | void;

    }


    export interface ArcGisImageServerTerrainProviderOptions {
        url: string;
        token?: string;
        proxy?: Object;
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        credit?: Credit | string;
    }


    export class GeographicTilingScheme {
        constructor(options?: GeographicTilingSchemeOptions);
        //Members
        ellipsoid: Ellipsoid;
        projection: MapProjection;
        rectangle: Rectangle;


        //Methods
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;

    }


    export interface GeographicTilingSchemeOptions {
        ellipsoid?: Ellipsoid;
        rectangle?: Rectangle;
        numberOfLevelZeroTilesX?: number;
        numberOfLevelZeroTilesY?: number;
    }


    export class ArcGisMapServerImageryProvider extends ImageryProvider {
        constructor(options?: ArcGisMapServerImageryProviderOptions);
        //Members
        credit: Credit;
        enablePickFeatures: boolean;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        token: string;
        url: string;
        usingPrecachedTiles: boolean;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export class TileDiscardPolicy {
        constructor();
        //Members


        //Methods
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement): boolean;

    }


    export class DefaultProxy {
        constructor(proxy: string);
        //Members


        //Methods
        getURL(resource: string): string;

    }


    export interface ArcGisMapServerImageryProviderOptions {
        url: string;
        token?: string;
        tileDiscardPolicy?: TileDiscardPolicy;
        proxy?: DefaultProxy;
        usePreCachedTilesIfAvailable?: boolean;
        layers?: string;
        enablePickFeatures?: boolean;
        rectangle?: Rectangle;
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        tileWidth?: number;
        tileHeight?: number;
        maximumLevel?: number;
    }


    export class ImageryLayerFeatureInfo {
        constructor();
        //Members
        data: Object;
        description: string;
        imageryLayer: Object;
        name: string;
        position: Cartographic;


        //Methods
        configureDescriptionFromProperties(properties: any): void;
        configureNameFromProperties(properties: any): void;

    }


    export class AssociativeArray {
        constructor();
        //Members
        length: number;
        values: Array<any>;


        //Methods
        contains(key: string | number): boolean;
        get(key: string | number): Object;
        remove(key: string | number): boolean;
        removeAll(): void;
        set(key: string | number, value: any): void;

    }


    export class AxisAlignedBoundingBox {
        constructor(minimum?: Cartesian3, maximum?: Cartesian3, center?: Cartesian3);
        //Members
        center: Cartesian3;
        maximum: Cartesian3;
        minimum: Cartesian3;


        //Methods
        static clone(box: AxisAlignedBoundingBox, result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        static equals(left?: AxisAlignedBoundingBox, right?: AxisAlignedBoundingBox): boolean;
        static fromPoints(positions: Array<Cartesian3>, result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        static intersectPlane(box: AxisAlignedBoundingBox, plane: Plane): Intersect;
        clone(result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        equals(right?: AxisAlignedBoundingBox): boolean;
        intersectPlane(plane: Plane): Intersect;

    }


    export class Intersect {
        constructor();
        //Members
        static INSIDE: number;
        static INTERSECTING: number;
        static OUTSIDE: number;


        //Methods

    }


    export class Plane {
        constructor(normal: Cartesian3, distance: number);
        //Members
        static ORIGIN_XY_PLANE: Plane;
        static ORIGIN_YZ_PLANE: Plane;
        static ORIGIN_ZX_PLANE: Plane;
        distance: number;
        normal: Cartesian3;


        //Methods
        static fromCartesian4(coefficients: Cartesian4, result?: Plane): Plane;
        static fromPointNormal(point: Cartesian3, normal: Cartesian3, result?: Plane): Plane;
        static getPointDistance(plane: Plane, point: Cartesian3): number;

    }


    export function barycentricCoordinates(point: Cartesian2 | Cartesian3, p0: Cartesian2 | Cartesian3, p1: Cartesian2 | Cartesian3, p2: Cartesian2 | Cartesian3, result?: Cartesian3): Cartesian3;


    export class BaseLayerPicker {
        constructor(container: Element | string, options?: BaseLayerPickerOptions);
        //Members
        container: Element;
        viewModel: BaseLayerPickerViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class Globe {
        constructor(ellipsoid?: Ellipsoid);
        //Members
        baseColor: Color;
        depthTestAgainstTerrain: boolean;
        ellipsoid: Ellipsoid;
        enableLighting: boolean;
        imageryLayers: ImageryLayerCollection;
        lightingFadeInDistance: number;
        lightingFadeOutDistance: number;
        maximumScreenSpaceError: number;
        oceanNormalMapUrl: string;
        shadows: ShadowMode;
        show: boolean;
        showWaterEffect: boolean;
        terrainProvider: TerrainProvider;
        terrainProviderChanged: Event;
        tileCacheSize: number;
        tileLoadProgressEvent: Event;


        //Methods
        destroy(): void;
        getHeight(cartographic: Cartographic): number;
        isDestroyed(): boolean;
        pick(ray: Ray, scene: Scene, result?: Cartesian3): Cartesian3;

    }


    export class Ray {
        constructor(origin?: Cartesian3, direction?: Cartesian3);
        //Members
        direction: Cartesian3;
        origin: Cartesian3;


        //Methods
        static getPoint(ray: Ray, t: number, result?: Cartesian3): Cartesian3;

    }


    export class Scene {
        constructor(options?: SceneOptions);
        //Members
        backgroundColor: Color;
        camera: Camera;
        canvas: HTMLCanvasElement;
        completeMorphOnUserInput: boolean;
        debugCommandFilter: (() => void);
        debugFrustumStatistics: Object;
        debugShowCommands: boolean;
        debugShowDepthFrustum: number;
        debugShowFramesPerSecond: boolean;
        debugShowFrustums: boolean;
        debugShowGlobeDepth: boolean;
        drawingBufferHeight: number;
        drawingBufferWidth: number;
        farToNearRatio: number;
        fog: Fog;
        fxaa: boolean;
        globe: Globe;
        groundPrimitives: PrimitiveCollection;
        id: string;
        imageryLayers: ImageryLayerCollection;
        mapMode2D: boolean;
        mapProjection: MapProjection;
        maximumAliasedLineWidth: number;
        maximumCubeMapSize: number;
        mode: SceneMode;
        moon: Moon;
        morphComplete: Event;
        morphStart: Event;
        morphTime: number;
        nearToFarDistance2D: number;
        orderIndependentTranslucency: boolean;
        pickPositionSupported: boolean;
        postRender: Event;
        preRender: Event;
        primitives: PrimitiveCollection;
        renderError: Event;
        rethrowRenderErrors: boolean;
        scene3DOnly: boolean;
        screenSpaceCameraController: ScreenSpaceCameraController;
        shadowMap: ShadowMap;
        skyAtmosphere: SkyAtmosphere;
        skyBox: SkyBox;
        sun: Sun;
        sunBloom: boolean;
        terrainExaggeration: number;
        terrainProvider: TerrainProvider;
        terrainProviderChanged: Event;
        useDepthPicking: boolean;
        useWebVR: boolean;


        //Methods
        completeMorph(): void;
        destroy(): void;
        drillPick(windowPosition: Cartesian2, limit?: number): Array<any>;
        isDestroyed(): boolean;
        morphTo2D(duration?: number): void;
        morphTo3D(duration?: number): void;
        morphToColumbusView(duration?: number): void;
        pick(windowPosition: Cartesian2): any;
        pickPosition(windowPosition: Cartesian2, result?: Cartesian3): Cartesian3;

    }


    export class MapMode2D {
        constructor();
        //Members
        static INFINITE_SCROLL: number;
        static ROTATE: number;


        //Methods

    }


    export interface SceneOptions {
        canvas: HTMLCanvasElement;
        contextOptions?: Object;
        creditContainer?: Element;
        mapProjection?: MapProjection;
        orderIndependentTranslucency?: boolean;
        scene3DOnly?: boolean;
        terrainExaggeration?: number;
        shadows?: boolean;
        mapMode2D?: MapMode2D;
    }


    export class Camera {
        constructor(scene: Scene);
        //Members
        static DEFAULT_VIEW_FACTOR: number;
        static DEFAULT_VIEW_RECTANGLE: Rectangle;
        changed: Event;
        constrainedAxis: Cartesian3;
        defaultLookAmount: number;
        defaultMoveAmount: number;
        defaultRotateAmount: number;
        defaultZoomAmount: number;
        direction: Cartesian3;
        directionWC: Cartesian3;
        frustum: PerspectiveFrustum;
        heading: number;
        inverseTransform: Matrix4;
        inverseViewMatrix: Matrix4;
        maximumZoomFactor: number;
        moveEnd: Event;
        moveStart: Event;
        percentageChanged: number;
        pitch: number;
        position: Cartesian3;
        positionCartographic: Cartographic;
        positionWC: Cartesian3;
        right: Cartesian3;
        rightWC: Cartesian3;
        roll: number;
        transform: Matrix4;
        up: Cartesian3;
        upWC: Cartesian3;
        viewMatrix: Matrix4;


        //Methods
        cameraToWorldCoordinates(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        cameraToWorldCoordinatesPoint(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        cameraToWorldCoordinatesVector(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        cancelFlight(): void;
        computeViewRectangle(ellipsoid?: Ellipsoid, result?: Rectangle): Rectangle | void;
        distanceToBoundingSphere(boundingSphere: BoundingSphere): number;
        flyHome(duration?: number): void;
        flyTo(options?: flyToOptions): void;
        flyToBoundingSphere(boundingSphere: BoundingSphere, options?: flyToBoundingSphereOptions): void;
        getMagnitude(): number;
        getPickRay(windowPosition: Cartesian2, result?: Ray): Ray;
        getPixelSize(boundingSphere: BoundingSphere, drawingBufferWidth: number, drawingBufferHeight: number): number;
        getRectangleCameraCoordinates(rectangle: Rectangle, result?: Cartesian3): Cartesian3;
        look(axis: Cartesian3, angle?: number): void;
        lookAt(target: Cartesian3, offset: Cartesian3 | HeadingPitchRange): void;
        lookAtTransform(transform: Matrix4, offset?: Cartesian3 | HeadingPitchRange): void;
        lookDown(amount?: number): void;
        lookLeft(amount?: number): void;
        lookRight(amount?: number): void;
        lookUp(amount?: number): void;
        move(direction: Cartesian3, amount?: number): void;
        moveBackward(amount?: number): void;
        moveDown(amount?: number): void;
        moveForward(amount?: number): void;
        moveLeft(amount?: number): void;
        moveRight(amount?: number): void;
        moveUp(amount?: number): void;
        pickEllipsoid(windowPosition: Cartesian2, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        rotate(axis: Cartesian3, angle?: number): void;
        rotateDown(angle?: number): void;
        rotateLeft(angle?: number): void;
        rotateRight(angle?: number): void;
        rotateUp(angle?: number): void;
        setView(options?: setViewOptions): void;
        twistLeft(amount?: number): void;
        twistRight(amount?: number): void;
        viewBoundingSphere(boundingSphere: BoundingSphere, offset?: HeadingPitchRange): void;
        worldToCameraCoordinates(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        worldToCameraCoordinatesPoint(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        worldToCameraCoordinatesVector(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        zoomIn(amount?: number): void;
        zoomOut(amount?: number): void;

    }


    export class BoundingSphere {
        constructor(center?: Cartesian3, radius?: number);
        //Members
        static packedLength: number;
        center: Cartesian3;
        radius: number;


        //Methods
        static clone(sphere: BoundingSphere, result?: BoundingSphere): BoundingSphere;
        static computePlaneDistances(sphere: BoundingSphere, position: Cartesian3, direction: Cartesian3, result?: Interval): Interval;
        static distanceSquaredTo(sphere: BoundingSphere, cartesian: Cartesian3): number;
        static equals(left?: BoundingSphere, right?: BoundingSphere): boolean;
        static expand(sphere: BoundingSphere, point: Cartesian3, result?: BoundingSphere): BoundingSphere;
        static fromBoundingSpheres(boundingSpheres: Array<BoundingSphere>, result?: BoundingSphere): BoundingSphere;
        static fromCornerPoints(corner?: Cartesian3, oppositeCorner?: Cartesian3, result?: BoundingSphere): BoundingSphere;
        static fromEllipsoid(ellipsoid: Ellipsoid, result?: BoundingSphere): BoundingSphere;
        static fromEncodedCartesianVertices(positionsHigh: Array<number>, positionsLow: Array<number>, result?: BoundingSphere): BoundingSphere;
        static fromOrientedBoundingBox(orientedBoundingBox: OrientedBoundingBox, result?: BoundingSphere): BoundingSphere;
        static fromPoints(positions: Array<Cartesian3>, result?: BoundingSphere): BoundingSphere;
        static fromRectangle2D(rectangle: Rectangle, projection?: any, result?: BoundingSphere): BoundingSphere;
        static fromRectangle3D(rectangle: Rectangle, ellipsoid?: Ellipsoid, surfaceHeight?: number, result?: BoundingSphere): BoundingSphere;
        static fromRectangleWithHeights2D(rectangle: Rectangle, projection?: any, minimumHeight?: number, maximumHeight?: number, result?: BoundingSphere): BoundingSphere;
        static fromVertices(positions: Array<number>, center?: Cartesian3, stride?: number, result?: BoundingSphere): BoundingSphere;
        static intersectPlane(sphere: BoundingSphere, plane: Plane): Intersect;
        static isOccluded(sphere: BoundingSphere, occluder: Occluder): boolean;
        static pack(value: BoundingSphere, array: Array<number>, startingIndex?: number): Array<number>;
        static projectTo2D(sphere: BoundingSphere, projection?: any, result?: BoundingSphere): BoundingSphere;
        static transform(sphere: BoundingSphere, transform: Matrix4, result?: BoundingSphere): BoundingSphere;
        static transformWithoutScale(sphere: BoundingSphere, transform: Matrix4, result?: BoundingSphere): BoundingSphere;
        static union(left: BoundingSphere, right: BoundingSphere, result?: BoundingSphere): BoundingSphere;
        static unpack(array: Array<number>, startingIndex?: number, result?: BoundingSphere): BoundingSphere;
        clone(result?: BoundingSphere): BoundingSphere;
        computePlaneDistances(position: Cartesian3, direction: Cartesian3, result?: Interval): Interval;
        distanceSquaredTo(cartesian: Cartesian3): number;
        equals(right?: BoundingSphere): boolean;
        intersectPlane(plane: Plane): Intersect;
        isOccluded(occluder: Occluder): boolean;

    }


    export class Interval {
        constructor(start?: number, stop?: number);
        //Members
        start: number;
        stop: number;


        //Methods

    }


    export class OrientedBoundingBox {
        constructor(center?: Cartesian3, halfAxes?: Matrix3);
        //Members
        center: Cartesian3;
        halfAxes: Matrix3;


        //Methods
        static clone(box: OrientedBoundingBox, result?: OrientedBoundingBox): OrientedBoundingBox;
        static computePlaneDistances(box: OrientedBoundingBox, position: Cartesian3, direction: Cartesian3, result?: Interval): Interval;
        static distanceSquaredTo(box: OrientedBoundingBox, cartesian: Cartesian3): number;
        static equals(left: OrientedBoundingBox, right: OrientedBoundingBox): boolean;
        static fromPoints(positions: Array<Cartesian3>, result?: OrientedBoundingBox): OrientedBoundingBox;
        static fromRectangle(rectangle: Rectangle, minimumHeight?: number, maximumHeight?: number, ellipsoid?: Ellipsoid, result?: OrientedBoundingBox): OrientedBoundingBox;
        static intersectPlane(box: OrientedBoundingBox, plane: Plane): Intersect;
        static isOccluded(box: OrientedBoundingBox, occluder: Occluder): boolean;
        clone(result?: OrientedBoundingBox): OrientedBoundingBox;
        computePlaneDistances(position: Cartesian3, direction: Cartesian3, result?: Interval): Interval;
        distanceSquaredTo(cartesian: Cartesian3): number;
        equals(right?: OrientedBoundingBox): boolean;
        intersectPlane(plane: Plane): Intersect;
        isOccluded(occluder: Occluder): boolean;

    }


    export class Matrix3 {
        constructor(column0Row0?: number, column1Row0?: number, column2Row0?: number, column0Row1?: number, column1Row1?: number, column2Row1?: number, column0Row2?: number, column1Row2?: number, column2Row2?: number);
        //Members
        length: number;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN0ROW2: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        static COLUMN1ROW2: number;
        static COLUMN2ROW0: number;
        static COLUMN2ROW1: number;
        static COLUMN2ROW2: number;
        static IDENTITY: Matrix3;
        static packedLength: number;
        static ZERO: Matrix3;


        //Methods
        clone(result?: Matrix3): Matrix3;
        equals(right?: Matrix3): boolean;
        equalsEpsilon(right?: Matrix3, epsilon?: number): boolean;
        toString(): string;
        static abs(matrix: Matrix3, result: Matrix3): Matrix3;
        static add(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static clone(matrix: Matrix3, result?: Matrix3): Matrix3;
        static computeEigenDecomposition(matrix: Matrix3, result?: any): Object;
        static determinant(matrix: Matrix3): number;
        static equals(left?: Matrix3, right?: Matrix3): boolean;
        static equalsEpsilon(left?: Matrix3, right?: Matrix3, epsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Matrix3): Matrix3;
        static fromColumnMajorArray(values: Array<number>, result?: Matrix3): Matrix3;
        static fromCrossProduct(the: Cartesian3, result?: Matrix3): Matrix3;
        static fromQuaternion(quaternion: Quaternion, result?: Matrix3): Matrix3;
        static fromRotationX(angle: number, result?: Matrix3): Matrix3;
        static fromRotationY(angle: number, result?: Matrix3): Matrix3;
        static fromRotationZ(angle: number, result?: Matrix3): Matrix3;
        static fromRowMajorArray(values: Array<number>, result?: Matrix3): Matrix3;
        static fromScale(scale: Cartesian3, result?: Matrix3): Matrix3;
        static fromUniformScale(scale: number, result?: Matrix3): Matrix3;
        static getColumn(matrix: Matrix3, index: number, result: Cartesian3): Cartesian3;
        static getElementIndex(row: number, column: number): number;
        static getMaximumScale(matrix: Matrix3): number;
        static getRow(matrix: Matrix3, index: number, result: Cartesian3): Cartesian3;
        static getScale(matrix: Matrix3, result: Cartesian3): Cartesian3;
        static inverse(matrix: Matrix3, result: Matrix3): Matrix3;
        static multiply(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static multiplyByScalar(matrix: Matrix3, scalar: number, result: Matrix3): Matrix3;
        static multiplyByScale(matrix: Matrix3, scale: Cartesian3, result: Matrix3): Matrix3;
        static multiplyByVector(matrix: Matrix3, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static negate(matrix: Matrix3, result: Matrix3): Matrix3;
        static pack(value: Matrix3, array: Array<number>, startingIndex?: number): Array<number>;
        static setColumn(matrix: Matrix3, index: number, cartesian: Cartesian3, result: Matrix3): Matrix3;
        static setRow(matrix: Matrix3, index: number, cartesian: Cartesian3, result: Matrix3): Matrix3;
        static subtract(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static toArray(matrix: Matrix3, result?: Array<number>): Array<number>;
        static transpose(matrix: Matrix3, result: Matrix3): Matrix3;
        static unpack(array: Array<number>, startingIndex?: number, result?: Matrix3): Matrix3;

    }


    export class Quaternion {
        constructor(x?: number, y?: number, z?: number, w?: number);
        //Members
        static IDENTITY: Quaternion;
        static packedInterpolationLength: number;
        static packedLength: number;
        static ZERO: Quaternion;
        w: number;
        x: number;
        y: number;
        z: number;


        //Methods
        static add(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static clone(quaternion: Quaternion, result?: Quaternion): Quaternion;
        static computeAngle(quaternion: Quaternion): number;
        static computeAxis(quaternion: Quaternion, result: Cartesian3): Cartesian3;
        static computeInnerQuadrangle(q0: Quaternion, q1: Quaternion, q2: Quaternion, result: Quaternion): Quaternion;
        static conjugate(quaternion: Quaternion, result: Quaternion): Quaternion;
        static convertPackedArrayForInterpolation(packedArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: Array<number>): void;
        static divideByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion;
        static dot(left: Quaternion, right: Quaternion): number;
        static equals(left?: Quaternion, right?: Quaternion): boolean;
        static equalsEpsilon(left?: Quaternion, right?: Quaternion, epsilon?: number): boolean;
        static exp(cartesian: Cartesian3, result: Quaternion): Quaternion;
        static fastSlerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static fastSquad(q0: Quaternion, q1: Quaternion, s0: Quaternion, s1: Quaternion, t: number, result: Quaternion): Quaternion;
        static fromAxisAngle(axis: Cartesian3, angle: number, result?: Quaternion): Quaternion;
        static fromHeadingPitchRoll(heading: number, pitch: number, roll: number, result?: Quaternion): Quaternion;
        static fromRotationMatrix(matrix: Matrix3, result?: Quaternion): Quaternion;
        static inverse(quaternion: Quaternion, result: Quaternion): Quaternion;
        static lerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static log(quaternion: Quaternion, result: Cartesian3): Cartesian3;
        static magnitude(quaternion: Quaternion): number;
        static magnitudeSquared(quaternion: Quaternion): number;
        static multiply(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static multiplyByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion;
        static negate(quaternion: Quaternion, result: Quaternion): Quaternion;
        static normalize(quaternion: Quaternion, result: Quaternion): Quaternion;
        static pack(value: Quaternion, array: Array<number>, startingIndex?: number): Array<number>;
        static slerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static squad(q0: Quaternion, q1: Quaternion, s0: Quaternion, s1: Quaternion, t: number, result: Quaternion): Quaternion;
        static subtract(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static unpack(array: Array<number>, startingIndex?: number, result?: Quaternion): Quaternion;
        static unpackInterpolationResult(array: Array<number>, sourceArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: Quaternion): Quaternion;
        clone(result?: Quaternion): Quaternion;
        equals(right?: Quaternion): boolean;
        equalsEpsilon(right?: Quaternion, epsilon?: number): boolean;
        toString(): string;

    }


    export class Occluder {
        constructor(occluderBoundingSphere: BoundingSphere, cameraPosition: Cartesian3);
        //Members
        cameraPosition: Cartesian3;
        position: Cartesian3;
        radius: number;


        //Methods
        static computeOccludeePoint(occluderBoundingSphere: BoundingSphere, occludeePosition: Cartesian3, positions: Array<Cartesian3>): Object;
        static computeOccludeePointFromRectangle(rectangle: Rectangle, ellipsoid?: Ellipsoid): Object;
        static fromBoundingSphere(occluderBoundingSphere: BoundingSphere, cameraPosition: Cartesian3, result?: Occluder): Occluder;
        computeVisibility(occludeeBS: BoundingSphere): number;
        isBoundingSphereVisible(occludee: BoundingSphere): boolean;
        isPointVisible(occludee: Cartesian3): boolean;

    }


    export class Matrix4 {
        constructor(column0Row0?: number, column1Row0?: number, column2Row0?: number, column3Row0?: number, column0Row1?: number, column1Row1?: number, column2Row1?: number, column3Row1?: number, column0Row2?: number, column1Row2?: number, column2Row2?: number, column3Row2?: number, column0Row3?: number, column1Row3?: number, column2Row3?: number, column3Row3?: number);
        //Members
        length: number;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN0ROW2: number;
        static COLUMN0ROW3: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        static COLUMN1ROW2: number;
        static COLUMN1ROW3: number;
        static COLUMN2ROW0: number;
        static COLUMN2ROW1: number;
        static COLUMN2ROW2: number;
        static COLUMN2ROW3: number;
        static COLUMN3ROW0: number;
        static COLUMN3ROW1: number;
        static COLUMN3ROW2: number;
        static COLUMN3ROW3: number;
        static IDENTITY: Matrix4;
        static packedLength: number;
        static ZERO: Matrix4;


        //Methods
        clone(result?: Matrix4): Matrix4;
        equals(right?: Matrix4): boolean;
        equalsEpsilon(right?: Matrix4, epsilon?: number): boolean;
        toString(): string;
        static abs(matrix: Matrix4, result: Matrix4): Matrix4;
        static add(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static clone(matrix: Matrix4, result?: Matrix4): Matrix4;
        static computeInfinitePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, near: number, result: Matrix4): Matrix4;
        static computeOrthographicOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number, result: Matrix4): Matrix4;
        static computePerspectiveFieldOfView(fovY: number, aspectRatio: number, near: number, far: number, result: Matrix4): Matrix4;
        static computePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number, result: Matrix4): Matrix4;
        static computeView(position: Cartesian3, direction: Cartesian3, up: Cartesian3, right: Cartesian3, result: Matrix4): Matrix4;
        static computeViewportTransformation(viewport?: any, nearDepthRange?: number, farDepthRange?: number, result?: Matrix4): Matrix4;
        static equals(left?: Matrix4, right?: Matrix4): boolean;
        static equalsEpsilon(left?: Matrix4, right?: Matrix4, epsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Matrix4): Matrix4;
        static fromCamera(camera: Camera, result?: Matrix4): Matrix4;
        static fromColumnMajorArray(values: Array<number>, result?: Matrix4): Matrix4;
        static fromRotationTranslation(rotation: Matrix3, translation?: Cartesian3, result?: Matrix4): Matrix4;
        static fromRowMajorArray(values: Array<number>, result?: Matrix4): Matrix4;
        static fromScale(scale: Cartesian3, result?: Matrix4): Matrix4;
        static fromTranslation(translation: Cartesian3, result?: Matrix4): Matrix4;
        static fromTranslationQuaternionRotationScale(translation: Cartesian3, rotation: Quaternion, scale: Cartesian3, result?: Matrix4): Matrix4;
        static fromTranslationRotationScale(translationRotationScale: TranslationRotationScale, result?: Matrix4): Matrix4;
        static fromUniformScale(scale: number, result?: Matrix4): Matrix4;
        static getColumn(matrix: Matrix4, index: number, result: Cartesian4): Cartesian4;
        static getElementIndex(row: number, column: number): number;
        static getMaximumScale(matrix: Matrix4): number;
        static getRotation(matrix: Matrix4, result: Matrix3): Matrix3;
        static getRow(matrix: Matrix4, index: number, result: Cartesian4): Cartesian4;
        static getScale(matrix: Matrix4, result: Cartesian3): Cartesian3;
        static getTranslation(matrix: Matrix4, result: Cartesian3): Cartesian3;
        static inverse(matrix: Matrix4, result: Matrix4): Matrix4;
        static inverseTransformation(matrix: Matrix4, result: Matrix4): Matrix4;
        static multiply(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static multiplyByMatrix3(matrix: Matrix4, rotation: Matrix3, result: Matrix4): Matrix4;
        static multiplyByPoint(matrix: Matrix4, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByPointAsVector(matrix: Matrix4, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByScalar(matrix: Matrix4, scalar: number, result: Matrix4): Matrix4;
        static multiplyByScale(matrix: Matrix4, scale: Cartesian3, result: Matrix4): Matrix4;
        static multiplyByTranslation(matrix: Matrix4, translation: Cartesian3, result: Matrix4): Matrix4;
        static multiplyByUniformScale(matrix: Matrix4, scale: number, result: Matrix4): Matrix4;
        static multiplyByVector(matrix: Matrix4, cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static multiplyTransformation(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static negate(matrix: Matrix4, result: Matrix4): Matrix4;
        static pack(value: Matrix4, array: Array<number>, startingIndex?: number): Array<number>;
        static setColumn(matrix: Matrix4, index: number, cartesian: Cartesian4, result: Matrix4): Matrix4;
        static setRow(matrix: Matrix4, index: number, cartesian: Cartesian4, result: Matrix4): Matrix4;
        static setTranslation(matrix: Matrix4, translation: Cartesian3, result: Cartesian4): Matrix4;
        static subtract(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static toArray(matrix: Matrix4, result?: Array<number>): Array<number>;
        static transpose(matrix: Matrix4, result: Matrix4): Matrix4;
        static unpack(array: Array<number>, startingIndex?: number, result?: Matrix4): Matrix4;

    }


    export class TranslationRotationScale {
        constructor(translation?: Cartesian3, rotation?: Quaternion, scale?: Cartesian3);
        //Members
        rotation: Quaternion;
        scale: Cartesian3;
        translation: Cartesian3;


        //Methods
        equals(right?: TranslationRotationScale): boolean;

    }


    export class EasingFunction {
        constructor();
        //Members
        static BACK_IN: any;
        static BACK_IN_OUT: any;
        static BACK_OUT: any;
        static BOUNCE_IN: any;
        static BOUNCE_IN_OUT: any;
        static BOUNCE_OUT: any;
        static CIRCULAR_IN: any;
        static CIRCULAR_IN_OUT: any;
        static CIRCULAR_OUT: any;
        static CUBIC_IN: any;
        static CUBIC_IN_OUT: any;
        static CUBIC_OUT: any;
        static ELASTIC_IN: any;
        static ELASTIC_IN_OUT: any;
        static ELASTIC_OUT: any;
        static EXPONENTIAL_IN: any;
        static EXPONENTIAL_IN_OUT: any;
        static EXPONENTIAL_OUT: any;
        static LINEAR_NONE: any;
        static QUADRACTIC_IN: any;
        static QUADRACTIC_IN_OUT: any;
        static QUADRACTIC_OUT: any;
        static QUARTIC_IN: any;
        static QUARTIC_IN_OUT: any;
        static QUARTIC_OUT: any;
        static QUINTIC_IN: any;
        static QUINTIC_IN_OUT: any;
        static QUINTIC_OUT: any;
        static SINUSOIDAL_IN: any;
        static SINUSOIDAL_IN_OUT: any;
        static SINUSOIDAL_OUT: any;


        //Methods

    }


    export interface flyToOptions {
        destination: Cartesian3 | Rectangle;
        orientation?: Object;
        duration?: number;
        complete?: any;
        cancel?: any;
        endTransform?: Matrix4;
        maximumHeight?: number;
        easingFunction?: EasingFunction | any;
        offset?: HeadingPitchRange;
    }


    export class HeadingPitchRange {
        constructor(heading?: number, pitch?: number, range?: number);
        //Members
        heading: number;
        pitch: number;
        range: number;


        //Methods
        static clone(hpr: HeadingPitchRange, result?: HeadingPitchRange): HeadingPitchRange;

    }


    export interface flyToBoundingSphereOptions {
        duration?: number;
        offset?: HeadingPitchRange;
        complete?: any;
        cancel?: any;
        endTransform?: Matrix4;
        maximumHeight?: number;
        easingFunction?: EasingFunction | any;
    }


    export interface setViewOptions {
        destination?: Cartesian3 | Rectangle;
        orientation?: Object;
        endTransform?: Matrix4;
    }


    export class PerspectiveFrustum {
        constructor();
        //Members
        aspectRatio: number;
        far: number;
        fov: number;
        fovy: number;
        infiniteProjectionMatrix: Matrix4;
        near: number;
        projectionMatrix: Matrix4;
        xOffset: number;
        yOffset: number;


        //Methods
        clone(result?: PerspectiveFrustum): PerspectiveFrustum;
        computeCullingVolume(position: Cartesian3, direction: Cartesian3, up: Cartesian3): CullingVolume;
        equals(other?: PerspectiveFrustum): boolean;
        getPixelDimensions(drawingBufferWidth: number, drawingBufferHeight: number, distance: number, result: Cartesian2): Cartesian2;

    }


    export class CullingVolume {
        constructor(planes?: Array<Cartesian4>);
        //Members
        planes: Array<Cartesian4>;


        //Methods
        static fromBoundingSphere(boundingSphere: BoundingSphere, result?: CullingVolume): CullingVolume;
        computeVisibility(boundingVolume: any): Intersect;

    }


    export class Fog {
        constructor();
        //Members
        density: number;
        enabled: boolean;
        screenSpaceErrorFactor: number;


        //Methods

    }


    export class PrimitiveCollection {
        constructor(options?: PrimitiveCollectionOptions);
        //Members
        destroyPrimitives: boolean;
        length: number;
        show: boolean;


        //Methods
        add(primitive: any): Object;
        contains(primitive?: any): boolean;
        destroy(): void;
        get(index: number): Object;
        isDestroyed(): boolean;
        lower(primitive?: any): void;
        lowerToBottom(primitive?: any): void;
        raise(primitive?: any): void;
        raiseToTop(primitive?: any): void;
        remove(primitive?: any): boolean;
        removeAll(): void;

    }


    export interface PrimitiveCollectionOptions {
        show?: boolean;
        destroyPrimitives?: boolean;
    }


    export class ImageryLayerCollection {
        constructor();
        //Members
        layerAdded: Event;
        layerMoved: Event;
        layerRemoved: Event;
        layerShownOrHidden: Event;
        length: number;


        //Methods
        add(layer: ImageryLayer, index?: number): void;
        addImageryProvider(imageryProvider: ImageryProvider, index?: number): ImageryLayer;
        contains(layer: ImageryLayer): boolean;
        destroy(): void;
        get(index: number): ImageryLayer;
        indexOf(layer: ImageryLayer): number;
        isDestroyed(): boolean;
        lower(layer: ImageryLayer): void;
        lowerToBottom(layer: ImageryLayer): void;
        pickImageryLayerFeatures(ray: Ray, scene: Scene): Promise<Array<ImageryLayerFeatureInfo>> | void;
        raise(layer: ImageryLayer): void;
        raiseToTop(layer: ImageryLayer): void;
        remove(layer: ImageryLayer, destroy?: boolean): boolean;
        removeAll(destroy?: boolean): void;

    }


    export class ImageryLayer {
        constructor(imageryProvider: ImageryProvider, options?: ImageryLayerOptions);
        //Members
        static DEFAULT_BRIGHTNESS: number;
        static DEFAULT_CONTRAST: number;
        static DEFAULT_GAMMA: number;
        static DEFAULT_HUE: number;
        static DEFAULT_SATURATION: number;
        alpha: number;
        brightness: number;
        contrast: number;
        gamma: number;
        hue: number;
        imageryProvider: ImageryProvider;
        rectangle: Rectangle;
        saturation: number;
        show: boolean;


        //Methods
        destroy(): void;
        getViewableRectangle(): Promise<Rectangle>;
        isBaseLayer(): boolean;
        isDestroyed(): boolean;

    }


    export class ImageryProvider {
        constructor();
        //Members
        credit: Credit;
        defaultAlpha: number;
        defaultBrightness: number;
        defaultContrast: number;
        defaultGamma: number;
        defaultHue: number;
        defaultSaturation: number;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;


        //Methods
        static loadImage(url: string): Promise<HTMLImageElement | HTMLCanvasElement> | void;
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface ImageryLayerOptions {
        rectangle?: Rectangle;
        alpha?: number | (() => void);
        brightness?: number | (() => void);
        contrast?: number | (() => void);
        hue?: number | (() => void);
        saturation?: number | (() => void);
        gamma?: number | (() => void);
        show?: boolean;
        maximumAnisotropy?: number;
        minimumTerrainLevel?: number;
        maximumTerrainLevel?: number;
    }


    export class SceneMode {
        constructor();
        //Members
        static COLUMBUS_VIEW: number;
        static MORPHING: number;
        static SCENE2D: number;
        static SCENE3D: number;


        //Methods
        static getMorphTime(value: SceneMode): number;

    }


    export class Moon {
        constructor(options?: MoonOptions);
        //Members
        ellipsoid: Ellipsoid;
        onlySunLighting: boolean;
        show: boolean;
        textureUrl: string;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface MoonOptions {
        show?: boolean;
        textureUrl?: string;
        ellipsoid?: Ellipsoid;
        onlySunLighting?: boolean;
    }


    export class ScreenSpaceCameraController {
        constructor(scene: Scene);
        //Members
        bounceAnimationTime: number;
        enableCollisionDetection: boolean;
        enableInputs: boolean;
        enableLook: boolean;
        enableRotate: boolean;
        enableTilt: boolean;
        enableTranslate: boolean;
        enableZoom: boolean;
        inertiaSpin: number;
        inertiaTranslate: number;
        inertiaZoom: number;
        lookEventTypes: CameraEventType | Array<any> | void;
        maximumMovementRatio: number;
        maximumZoomDistance: number;
        minimumCollisionTerrainHeight: number;
        minimumPickingTerrainHeight: number;
        minimumTrackBallHeight: number;
        minimumZoomDistance: number;
        rotateEventTypes: CameraEventType | Array<any> | void;
        tiltEventTypes: CameraEventType | Array<any> | void;
        translateEventTypes: CameraEventType | Array<any> | void;
        zoomEventTypes: CameraEventType | Array<any> | void;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class CameraEventType {
        constructor();
        //Members
        static LEFT_DRAG: number;
        static MIDDLE_DRAG: number;
        static PINCH: number;
        static RIGHT_DRAG: number;
        static WHEEL: number;


        //Methods

    }


    export class ShadowMap {
        constructor(options?: ShadowMapOptions);
        //Members
        darkness: number;
        enabled: boolean;
        maximumDistance: number;
        size: number;
        softShadows: boolean;


        //Methods

    }


    export interface ShadowMapOptions {
        context: any;
        lightCamera: Camera;
        enabled?: boolean;
        isPointLight?: boolean;
        pointLightRadius?: boolean;
        cascadesEnabled?: boolean;
        numberOfCascades?: number;
        maximumDistance?: number;
        size?: number;
        softShadows?: boolean;
        darkness?: number;
    }


    export class SkyAtmosphere {
        constructor(ellipsoid?: Ellipsoid);
        //Members
        brightnessShift: number;
        ellipsoid: Ellipsoid;
        hueShift: number;
        saturationShift: number;
        show: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class SkyBox {
        constructor(options?: SkyBoxOptions);
        //Members
        show: boolean;
        sources: Object;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(): void;

    }


    export interface SkyBoxOptions {
        sources?: Object;
        show?: boolean;
    }


    export class Sun {
        constructor();
        //Members
        glowFactor: number;
        show: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    //export class ShadowMode {
    //    constructor();
    //    //Members
    //    static CAST_ONLY: number;
    //    static DISABLED: number;
    //    static ENABLED: number;
    //    static RECEIVE_ONLY: number;


    //    //Methods

    //}

    export enum ShadowMode {
        DISABLED = 0,
        ENABLED = 1,
        CAST_ONLY = 2,
        RECEIVE_ONLY = 3,
    }


    export class ProviderViewModel {
        constructor(options: ProviderViewModelOptions);
        //Members
        creationCommand: Command;
        iconUrl: string;
        name: string;
        tooltip: string;


        //Methods

    }


    export interface ProviderViewModelOptions {
        name: string;
        tooltip: string;
        iconUrl: string;
        creationFunction: any | Command;
    }


    export interface BaseLayerPickerOptions {
        globe: Globe;
        imageryProviderViewModels?: Array<ProviderViewModel>;
        selectedImageryProviderViewModel?: ProviderViewModel;
        terrainProviderViewModels?: Array<ProviderViewModel>;
        selectedTerrainProviderViewModel?: ProviderViewModel;
    }


    export class BaseLayerPickerViewModel {
        constructor(options?: BaseLayerPickerViewModelOptions);
        //Members
        buttonImageUrl: string;
        buttonTooltip: string;
        dropDownVisible: boolean;
        globe: Globe;
        imageryProviderViewModels: Array<ProviderViewModel>;
        selectedImagery: ProviderViewModel;
        selectedTerrain: ProviderViewModel;
        terrainProviderViewModels: Array<ProviderViewModel>;
        toggleDropDown: Command;


        //Methods

    }


    export interface BaseLayerPickerViewModelOptions {
        globe: Globe;
        imageryProviderViewModels?: Array<ProviderViewModel>;
        selectedImageryProviderViewModel?: ProviderViewModel;
        terrainProviderViewModels?: Array<ProviderViewModel>;
        selectedTerrainProviderViewModel?: ProviderViewModel;
    }


    export class Billboard {
        constructor();
        //Members
        alignedAxis: Cartesian3;
        color: Color;
        distanceDisplayCondition: DistanceDisplayCondition;
        eyeOffset: Cartesian3;
        height: number;
        heightReference: HeightReference;
        horizontalOrigin: HorizontalOrigin;
        id: Object;
        image: string;
        pixelOffset: Cartesian2;
        pixelOffsetScaleByDistance: NearFarScalar;
        position: Cartesian3;
        ready: boolean;
        rotation: number;
        scale: number;
        scaleByDistance: NearFarScalar;
        show: boolean;
        sizeInMeters: boolean;
        translucencyByDistance: NearFarScalar;
        verticalOrigin: VerticalOrigin;
        width: number;


        //Methods
        computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
        equals(other: Billboard): boolean;
        setImage(id: string, image: HTMLImageElement | HTMLCanvasElement | string | any): void;
        setImageSubRegion(id: string, subRegion: BoundingRectangle): void;

    }


    export class BoundingRectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);
        //Members
        static packedLength: number;
        height: number;
        width: number;
        x: number;
        y: number;


        //Methods
        static clone(rectangle: BoundingRectangle, result?: BoundingRectangle): BoundingRectangle;
        static equals(left?: BoundingRectangle, right?: BoundingRectangle): boolean;
        static expand(rectangle: BoundingRectangle, point: Cartesian2, result?: BoundingRectangle): BoundingRectangle;
        static fromPoints(positions: Array<Cartesian2>, result?: BoundingRectangle): BoundingRectangle;
        static fromRectangle(rectangle: Rectangle, projection?: any, result?: BoundingRectangle): BoundingRectangle;
        static intersect(left: BoundingRectangle, right: BoundingRectangle): Intersect;
        static pack(value: BoundingRectangle, array: Array<number>, startingIndex?: number): Array<number>;
        static union(left: BoundingRectangle, right: BoundingRectangle, result?: BoundingRectangle): BoundingRectangle;
        static unpack(array: Array<number>, startingIndex?: number, result?: BoundingRectangle): BoundingRectangle;
        clone(result?: BoundingRectangle): BoundingRectangle;
        equals(right?: BoundingRectangle): boolean;
        intersect(right: BoundingRectangle): Intersect;

    }


    export class DistanceDisplayCondition {
        constructor(near?: number, far?: number);
        //Members
        far: number;
        near: number;


        //Methods
        static clone(value?: DistanceDisplayCondition, result?: DistanceDisplayCondition): DistanceDisplayCondition;
        static equals(left: DistanceDisplayCondition, right: DistanceDisplayCondition): boolean;
        clone(result?: DistanceDisplayCondition): DistanceDisplayCondition;
        equals(other: DistanceDisplayCondition): boolean;

    }


    //export class HeightReference {
    //    constructor();
    //    //Members
    //    static CLAMP_TO_GROUND: number;
    //    static NONE: number;
    //    static RELATIVE_TO_GROUND: number;


    //    //Methods

    //}

    export enum HeightReference {
        NONE = 0,
        CLAMP_TO_GROUND = 1,
        RELATIVE_TO_GROUND = 2,
    }


    export class HorizontalOrigin {
        constructor();
        //Members
        static CENTER: number;
        static LEFT: number;
        static RIGHT: number;


        //Methods

    }


    export class NearFarScalar {
        constructor(near?: number, nearValue?: number, far?: number, farValue?: number);
        //Members
        static packedLength: number;
        far: number;
        farValue: number;
        near: number;
        nearValue: number;


        //Methods
        static clone(nearFarScalar: NearFarScalar, result?: NearFarScalar): NearFarScalar;
        static equals(left?: NearFarScalar, right?: NearFarScalar): boolean;
        static pack(value: NearFarScalar, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: NearFarScalar): NearFarScalar;
        clone(result?: NearFarScalar): NearFarScalar;
        equals(right?: NearFarScalar): boolean;

    }


    export class VerticalOrigin {
        constructor();
        //Members
        static BOTTOM: number;
        static CENTER: number;
        static TOP: number;


        //Methods

    }


    export class BillboardCollection {
        constructor(options?: BillboardCollectionOptions);
        //Members
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;


        //Methods
        add(billboard?: any): Billboard;
        contains(billboard?: Billboard): boolean;
        destroy(): void;
        get(index: number): Billboard;
        isDestroyed(): boolean;
        remove(billboard: Billboard): boolean;
        removeAll(): void;
        update(): void;

    }


    export interface BillboardCollectionOptions {
        modelMatrix?: Matrix4;
        debugShowBoundingVolume?: boolean;
        scene?: Scene;
    }


    export class BillboardGraphics {
        constructor(options?: BillboardGraphicsOptions);
        //Members
        alignedAxis: Property<any>;
        color: Property<Color>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        eyeOffset: Property<any>;
        height: Property<any>;
        heightReference: Property<HeightReference>;
        horizontalOrigin: Property<any>;
        image: Property<any>;
        imageSubRegion: Property<any>;
        pixelOffset: Property<any>;
        pixelOffsetScaleByDistance: Property<any>;
        rotation: Property<any>;
        scale: Property<number>;
        scaleByDistance: Property<any>;
        show: Property<any>;
        sizeInMeters: Property<any>;
        translucencyByDistance: Property<any>;
        verticalOrigin: Property<any>;
        width: Property<any>;


        //Methods
        clone(result?: BillboardGraphics): BillboardGraphics;
        merge(source: BillboardGraphics): void;

    }


    export interface Property<T> {
        //Members
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: any): T;

    }

    export interface BillboardGraphicsOptions {
        image?: any;
        show?: PropertyOrValue<any>;
        scale?: PropertyOrValue<any>;
        horizontalOrigin?: PropertyOrValue<any>;
        verticalOrigin?: PropertyOrValue<any>;
        eyeOffset?: PropertyOrValue<any>;
        pixelOffset?: PropertyOrValue<any>;
        rotation?: PropertyOrValue<any>;
        alignedAxis?: PropertyOrValue<any>;
        width?: PropertyOrValue<any>;
        height?: PropertyOrValue<any>;
        color?: PropertyOrValue<any>;
        scaleByDistance?: PropertyOrValue<any>;
        translucencyByDistance?: PropertyOrValue<any>;
        pixelOffsetScaleByDistance?: PropertyOrValue<any>;
        imageSubRegion?: PropertyOrValue<any>;
        sizeInMeters?: PropertyOrValue<any>;
        heightReference?: PropertyOrValue<HeightReference>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export interface Visualizer {
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class BillboardVisualizer implements Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class EntityCluster {
        constructor(options?: EntityClusterOptions);
        //Members
        clusterEvent: Event;
        enabled: boolean;
        minimumClusterSize: number;
        pixelRange: number;


        //Methods
        destroy(): void;

    }


    export interface EntityClusterOptions {
        enabled?: boolean;
        pixelRange?: number;
        minimumClusterSize?: number;
    }


    export class EntityCollection {
        constructor(owner?: DataSource | CompositeEntityCollection);
        //Members
        collectionChanged: Event;
        id: string;
        owner: DataSource | CompositeEntityCollection;
        show: boolean;
        values: Array<Entity>;


        //Methods
        static collectionChangedEventCallback(collection: EntityCollection, added: Array<Entity>, removed: Array<Entity>, changed: Array<Entity>): void;
        add(entity: Entity | EntityOptions): Entity;
        computeAvailability(): TimeInterval;
        contains(entity: Entity): boolean;
        getById(id: any): Entity;
        getOrCreateEntity(id: any): Entity;
        remove(entity: Entity): boolean;
        removeAll(): void;
        removeById(id: any): boolean;
        resumeEvents(): void;
        suspendEvents(): void;

    }


    export interface DataSource {
        //Members
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        show: boolean;


        //Methods
        update(time: JulianDate): boolean;

    }


    export class DataSourceClock {
        constructor();
        //Members
        clockRange: ClockRange;
        clockStep: ClockStep;
        currentTime: JulianDate;
        definitionChanged: Event;
        multiplier: number;
        startTime: JulianDate;
        stopTime: JulianDate;


        //Methods
        clone(result?: DataSourceClock): DataSourceClock;
        equals(other: DataSourceClock): boolean;
        getValue(): Clock;
        merge(source: DataSourceClock): void;

    }


    export class CompositeEntityCollection {
        constructor(collections?: Array<EntityCollection>, owner?: DataSource | CompositeEntityCollection);
        //Members
        collectionChanged: Event;
        id: string;
        owner: DataSource | CompositeEntityCollection;
        values: Array<Entity>;


        //Methods
        addCollection(collection: EntityCollection, index?: number): void;
        computeAvailability(): TimeInterval;
        contains(entity: Entity): boolean;
        containsCollection(collection: EntityCollection): boolean;
        getById(id: any): Entity;
        getCollection(index: number): void;
        getCollectionsLength(): void;
        indexOfCollection(collection: EntityCollection): number;
        lowerCollection(collection: EntityCollection): void;
        lowerCollectionToBottom(collection: EntityCollection): void;
        raiseCollection(collection: EntityCollection): void;
        raiseCollectionToTop(collection: EntityCollection): void;
        removeAllCollections(): void;
        removeCollection(collection: EntityCollection): boolean;
        resumeEvents(): void;
        suspendEvents(): void;

    }


    export class TimeInterval {
        constructor(options?: TimeIntervalOptions);
        //Members
        static EMPTY: TimeInterval;
        data: Object;
        isEmpty: boolean;
        isStartIncluded: boolean;
        isStopIncluded: boolean;
        start: JulianDate;
        stop: JulianDate;


        //Methods
        static clone(timeInterval?: TimeInterval, result?: TimeInterval): TimeInterval;
        static contains(timeInterval: TimeInterval, julianDate: JulianDate): boolean;
        static equals(left?: TimeInterval, right?: TimeInterval, dataComparer?: any): boolean;
        static equalsEpsilon(left?: TimeInterval, right?: TimeInterval, epsilon?: number, dataComparer?: any): boolean;
        static fromIso8601(options?: fromIso8601Options, result?: TimeInterval): TimeInterval;
        static intersect(left: TimeInterval, right?: TimeInterval, result?: TimeInterval, mergeCallback?: any): TimeInterval;
        static toIso8601(timeInterval: TimeInterval, precision?: number): string;
        clone(result?: TimeInterval): TimeInterval;
        equals(right?: TimeInterval, dataComparer?: any): boolean;
        equalsEpsilon(right?: TimeInterval, epsilon?: number, dataComparer?: any): boolean;
        toString(): string;

    }


    export interface TimeIntervalOptions {
        start?: JulianDate;
        stop?: JulianDate;
        isStartIncluded?: boolean;
        isStopIncluded?: boolean;
        data?: Object;
    }


    export interface fromIso8601Options {
        iso8601: string;
        isStartIncluded?: boolean;
        isStopIncluded?: boolean;
        data?: Object;
    }


    export class Entity {
        constructor(options?: EntityOptions);
        //Members
        availability: TimeIntervalCollection;
        billboard: BillboardGraphics;
        box: BoxGraphics;
        corridor: CorridorGraphics;
        cylinder: CylinderGraphics;
        definitionChanged: Event;
        description: Property<any>;
        ellipse: EllipseGraphics;
        ellipsoid: EllipsoidGraphics;
        entityCollection: EntityCollection;
        id: string;
        isShowing: boolean;
        label: LabelGraphics;
        model: ModelGraphics;
        name: string;
        orientation: Property<Quaternion>;
        parent: Entity;
        path: PathGraphics;
        point: PointGraphics;
        polygon: PolygonGraphics;
        polyline: PolylineGraphics;
        polylineVolume: PolylineVolumeGraphics;
        position: PositionProperty;
        propertyNames: Array<any>;
        rectangle: RectangleGraphics;
        show: boolean;
        viewFrom: Property<any>;
        wall: WallGraphics;


        //Methods
        addProperty(propertyName: string): void;
        isAvailable(time: JulianDate): boolean;
        merge(source: Entity): void;
        removeProperty(propertyName: string): void;

    }


    export class TimeIntervalCollection {
        constructor(intervals?: Array<TimeInterval>);
        //Members
        changedEvent: Event;
        isEmpty: boolean;
        isStartIncluded: boolean;
        isStopIncluded: boolean;
        length: number;
        start: JulianDate;
        stop: JulianDate;


        //Methods
        addInterval(interval: TimeInterval, dataComparer?: any): void;
        contains(julianDate: JulianDate): boolean;
        equals(right?: TimeIntervalCollection, dataComparer?: any): boolean;
        findDataForIntervalContainingDate(date: JulianDate): Object;
        findInterval(options?: findIntervalOptions): TimeInterval;
        findIntervalContainingDate(date: JulianDate): TimeInterval | void;
        get(index: number): TimeInterval;
        indexOf(date: JulianDate): number;
        intersect(other: TimeIntervalCollection, dataComparer?: any, mergeCallback?: any): TimeIntervalCollection;
        removeAll(): void;
        removeInterval(interval: TimeInterval): void;

    }


    export interface findIntervalOptions {
        start?: JulianDate;
        stop?: JulianDate;
        isStartIncluded?: boolean;
        isStopIncluded?: boolean;
    }


    export interface PositionProperty extends Property<Cartesian3> {
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;

    }


    export class ReferenceFrame {
        constructor();
        //Members
        static FIXED: number;
        static INERTIAL: number;


        //Methods

    }


    export class BoxGraphics {
        constructor(options?: BoxGraphicsOptions);
        //Members
        definitionChanged: Event;
        dimensions: Property<any>;
        distanceDisplayCondition: Property<any>;
        fill: Property<any>;
        material: MaterialProperty;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;


        //Methods
        clone(result?: BoxGraphics): BoxGraphics;
        merge(source: BoxGraphics): void;

    }

    export interface MaterialProperty extends Property<any> {
        //Members
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface BoxGraphicsOptions {
        dimensions?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class CorridorGraphics {
        constructor(options?: CorridorGraphicsOptions);
        //Members
        cornerType: Property<any>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        extrudedHeight: Property<any>;
        fill: Property<any>;
        granularity: Property<any>;
        height: Property<any>;
        material: MaterialProperty;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        positions: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        width: Property<any>;


        //Methods
        clone(result?: CorridorGraphics): CorridorGraphics;
        merge(source: CorridorGraphics): void;

    }


    export interface CorridorGraphicsOptions {
        positions?: PropertyOrValue<any>;
        width?: PropertyOrValue<any>;
        cornerType?: PropertyOrValue<any>;
        height?: PropertyOrValue<any>;
        extrudedHeight?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class CylinderGraphics {
        constructor(options?: CylinderGraphicsOptions);
        //Members
        bottomRadius: Property<any>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        fill: Property<any>;
        length: Property<any>;
        material: MaterialProperty;
        numberOfVerticalLines: Property<any>;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        slices: Property<any>;
        topRadius: Property<any>;


        //Methods
        clone(result?: CylinderGraphics): CylinderGraphics;
        merge(source: CylinderGraphics): void;

    }


    export interface CylinderGraphicsOptions {
        length?: PropertyOrValue<any>;
        topRadius?: PropertyOrValue<any>;
        bottomRadius?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        numberOfVerticalLines?: PropertyOrValue<any>;
        slices?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class EllipseGraphics {
        constructor(options?: EllipseGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        extrudedHeight: Property<any>;
        fill: Property<any>;
        granularity: Property<any>;
        height: Property<any>;
        material: MaterialProperty;
        numberOfVerticalLines: Property<any>;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        rotation: Property<any>;
        semiMajorAxis: Property<any>;
        semiMinorAxis: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        stRotation: Property<any>;


        //Methods
        clone(result?: EllipseGraphics): EllipseGraphics;
        merge(source: EllipseGraphics): void;

    }


    export interface EllipseGraphicsOptions {
        semiMajorAxis?: PropertyOrValue<any>;
        semiMinorAxis?: PropertyOrValue<any>;
        height?: PropertyOrValue<any>;
        extrudedHeight?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        numberOfVerticalLines?: PropertyOrValue<any>;
        rotation?: PropertyOrValue<any>;
        stRotation?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class EllipsoidGraphics {
        constructor(options?: EllipsoidGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        fill: Property<any>;
        material: MaterialProperty;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        radii: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        slicePartitions: Property<any>;
        stackPartitions: Property<any>;
        subdivisions: Property<any>;


        //Methods
        clone(result?: EllipsoidGraphics): EllipsoidGraphics;
        merge(source: EllipsoidGraphics): void;

    }


    export interface EllipsoidGraphicsOptions {
        radii?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        subdivisions?: PropertyOrValue<any>;
        stackPartitions?: PropertyOrValue<any>;
        slicePartitions?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class LabelGraphics {
        constructor(options?: LabelGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        eyeOffset: PositionProperty;
        fillColor: Property<any>;
        font: Property<any>;
        heightReference: Property<HeightReference>;
        horizontalOrigin: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        pixelOffset: Property<any>;
        pixelOffsetScaleByDistance: Property<any>;
        scale: Property<number>;
        show: Property<boolean>;
        style: Property<any>;
        text: Property<string>;
        translucencyByDistance: Property<any>;
        verticalOrigin: Property<any>;


        //Methods
        clone(result?: LabelGraphics): LabelGraphics;
        merge(source: LabelGraphics): void;

    }


    export interface LabelGraphicsOptions {
        text?: PropertyOrValue<any>;
        font?: PropertyOrValue<any>;
        style?: PropertyOrValue<any>;
        fillColor?: PropertyOrValue<Color>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        scale?: PropertyOrValue<any>;
        horizontalOrigin?: PropertyOrValue<any>;
        verticalOrigin?: PropertyOrValue<any>;
        eyeOffset?: PropertyOrValue<any>;
        pixelOffset?: PropertyOrValue<any>;
        translucencyByDistance?: PropertyOrValue<any>;
        pixelOffsetScaleByDistance?: PropertyOrValue<any>;
        heightReference?: PropertyOrValue<HeightReference>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class ModelGraphics {
        constructor(options?: ModelGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        heightReference: Property<HeightReference>;
        incrementallyLoadTextures: Property<any>;
        maximumScale: Property<any>;
        minimumPixelSize: Property<any>;
        nodeTransformations: PropertyBag;
        runAnimations: Property<any>;
        scale: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        uri: Property<any>;


        //Methods
        clone(result?: ModelGraphics): ModelGraphics;
        merge(source: ModelGraphics): void;

    }


    export interface ModelGraphicsOptions {
        uri?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        scale?: PropertyOrValue<any>;
        minimumPixelSize?: PropertyOrValue<any>;
        maximumScale?: PropertyOrValue<any>;
        incrementallyLoadTextures?: PropertyOrValue<any>;
        runAnimations?: PropertyOrValue<any>;
        nodeTransformations?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        heightReference?: PropertyOrValue<HeightReference>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class PropertyBag implements Property<any>
    {
        constructor(value?: any, createPropertyCallback?: (() => void));
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        propertyNames: Array<any>;


        //Methods
        addProperty(propertyName: string, value?: any, createPropertyCallback?: (() => void)): void;
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: any): Object;
        hasProperty(propertyName: string): boolean;
        merge(source: any, createPropertyCallback?: (() => void)): void;
        removeProperty(propertyName: string): void;

    }


    export class PathGraphics {
        constructor(options?: PathGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        leadTime: Property<any>;
        material: MaterialProperty;
        resolution: Property<any>;
        show: Property<any>;
        trailTime: Property<any>;
        width: Property<any>;


        //Methods
        clone(result?: PathGraphics): PathGraphics;
        merge(source: PathGraphics): void;

    }


    export interface PathGraphicsOptions {
        leadTime?: PropertyOrValue<any>;
        trailTime?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        width?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        resolution?: PropertyOrValue<any>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class PointGraphics {
        constructor(options?: PointGraphicsOptions);
        //Members
        color: Property<any>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        heightReference: Property<HeightReference>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        pixelSize: Property<any>;
        scaleByDistance: Property<any>;
        show: Property<any>;
        translucencyByDistance: Property<any>;


        //Methods
        clone(result?: PointGraphics): PointGraphics;
        merge(source: PointGraphics): void;

    }


    export interface PointGraphicsOptions {
        color?: PropertyOrValue<any>;
        pixelSize?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        scaleByDistance?: PropertyOrValue<any>;
        translucencyByDistance?: PropertyOrValue<any>;
        heightReference?: PropertyOrValue<HeightReference>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class PolygonGraphics {
        constructor(options?: PolygonGraphicsOptions);
        //Members
        closeBottom: Property<any>;
        closeTop: Property<any>;
        definitionChanged: Event;
        extrudedHeight: Property<number>;
        fill: Property<any>;
        granularity: Property<any>;
        height: Property<any>;
        hierarchy: Property<any>;
        material: MaterialProperty;
        outline: Property<boolean>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        perPositionHeight: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        stRotation: Property<any>;


        //Methods
        clone(result?: PolygonGraphics): PolygonGraphics;
        merge(source: PolygonGraphics): void;

    }


    export interface PolygonGraphicsOptions {
        hierarchy?: PropertyOrValue<any>;
        height?: PropertyOrValue<any>;
        extrudedHeight?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        stRotation?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        perPositionHeight?: PropertyOrValue<any>;
        closeTop?: boolean;
        closeBottom?: boolean;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class PolylineGraphics {
        constructor(options?: PolylineGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        followSurface: Property<any>;
        granularity: Property<any>;
        material: MaterialProperty;
        positions: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        width: Property<any>;


        //Methods
        clone(result?: PolylineGraphics): PolylineGraphics;
        merge(source: PolylineGraphics): void;

    }


    export interface PolylineGraphicsOptions {
        positions?: PropertyOrValue<any>;
        followSurface?: PropertyOrValue<any>;
        width?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class PolylineVolumeGraphics {
        constructor(options?: PolylineVolumeGraphicsOptions);
        //Members
        cornerType: Property<any>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        fill: Property<any>;
        granularity: Property<any>;
        material: MaterialProperty;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        positions: Property<any>;
        shadows: Property<ShadowMode>;
        shape: Property<any>;
        show: Property<any>;


        //Methods
        clone(result?: PolylineVolumeGraphics): PolylineVolumeGraphics;
        merge(source: PolylineVolumeGraphics): void;

    }


    export interface PolylineVolumeGraphicsOptions {
        positions?: PropertyOrValue<Array<Cartesian3>>;
        shape?: PropertyOrValue<Array<Cartesian2>>;
        cornerType?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class RectangleGraphics {
        constructor(options?: RectangleGraphicsOptions);
        //Members
        closeBottom: Property<any>;
        closeTop: Property<any>;
        coordinates: Property<any>;
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        extrudedHeight: Property<any>;
        fill: Property<any>;
        granularity: Property<any>;
        height: Property<any>;
        material: MaterialProperty;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        rotation: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;
        stRotation: Property<any>;


        //Methods
        clone(result?: RectangleGraphics): RectangleGraphics;
        merge(source: RectangleGraphics): void;

    }


    export interface RectangleGraphicsOptions {
        coordinates?: PropertyOrValue<any>;
        height?: PropertyOrValue<any>;
        extrudedHeight?: PropertyOrValue<any>;
        closeTop?: PropertyOrValue<any>;
        closeBottom?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        rotation?: PropertyOrValue<any>;
        stRotation?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export class WallGraphics {
        constructor(options?: WallGraphicsOptions);
        //Members
        definitionChanged: Event;
        distanceDisplayCondition: Property<any>;
        fill: Property<any>;
        granularity: Property<any>;
        material: MaterialProperty;
        maximumHeights: Property<any>;
        minimumHeights: Property<any>;
        outline: Property<any>;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;
        positions: Property<any>;
        shadows: Property<ShadowMode>;
        show: Property<any>;


        //Methods
        clone(result?: WallGraphics): WallGraphics;
        merge(source: WallGraphics): void;

    }


    export interface WallGraphicsOptions {
        positions?: PropertyOrValue<any>;
        maximumHeights?: PropertyOrValue<any>;
        minimumHeights?: PropertyOrValue<any>;
        show?: PropertyOrValue<any>;
        fill?: PropertyOrValue<any>;
        material?: PropertyOrValue<any>;
        outline?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
        granularity?: PropertyOrValue<any>;
        shadows?: PropertyOrValue<ShadowMode>;
        distanceDisplayCondition?: PropertyOrValue<any>;
    }


    export interface EntityOptions {
        id?: string;
        name?: string;
        availability?: TimeIntervalCollection;
        show?: boolean;
        description?: PropertyOrValue<any>;
        position?: PositionProperty | Cartesian3;
        orientation?: PropertyOrValue<any>;
        viewFrom?: PropertyOrValue<any>;
        parent?: Entity;
        billboard?: BillboardGraphics | BillboardGraphicsOptions;
        box?: BoxGraphics | BoxGraphicsOptions;
        corridor?: CorridorGraphics | CorridorGraphicsOptions;
        cylinder?: CylinderGraphics | CylinderGraphicsOptions;
        ellipse?: EllipseGraphics | EllipseGraphicsOptions;
        ellipsoid?: EllipsoidGraphics | EllipsoidGraphicsOptions;
        label?: LabelGraphics | LabelGraphicsOptions;
        model?: ModelGraphics | ModelGraphicsOptions;
        path?: PathGraphics | PathGraphicsOptions;
        point?: PointGraphics | PointGraphicsOptions;
        polygon?: PolygonGraphics | PolygonGraphicsOptions;
        polyline?: PolylineGraphics | PolylineGraphicsOptions;
        polylineVolume?: PolylineVolumeGraphics | PolylineVolumeGraphicsOptions;
        rectangle?: RectangleGraphics | RectangleGraphicsOptions;
        wall?: WallGraphics | WallGraphicsOptions;
        [x: string]: any;   //Custom property
    }


    export function binarySearch(array: Array<any>, itemToFind: any, comparator: any): number;


    export class BingMapsApi {
        constructor();
        //Members
        static defaultKey: string;


        //Methods

    }


    export class BingMapsImageryProvider extends ImageryProvider {
        constructor(options?: BingMapsImageryProviderOptions);
        //Members
        credit: Credit;
        culture: string;
        defaultGamma: number;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        key: string;
        mapStyle: BingMapsStyle;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;


        //Methods
        static quadKeyToTileXY(quadkey: string): void;
        static tileXYToQuadKey(x: number, y: number, level: number): void;
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface BingMapsImageryProviderOptions {
        url: string;
        key?: string;
        tileProtocol?: string;
        mapStyle?: string;
        culture?: string;
        ellipsoid?: Ellipsoid;
        tileDiscardPolicy?: TileDiscardPolicy;
        proxy?: DefaultProxy;
    }


    export class BingMapsStyle {
        constructor();
        //Members
        static AERIAL: string;
        static AERIAL_WITH_LABELS: string;
        static COLLINS_BART: string;
        static ORDNANCE_SURVEY: string;
        static ROAD: string;


        //Methods

    }


    export class BlendEquation {
        constructor();
        //Members
        static ADD: number;
        static REVERSE_SUBTRACT: number;
        static SUBTRACT: number;


        //Methods

    }


    export class BlendFunction {
        constructor();
        //Members
        static CONSTANT_ALPHA: number;
        static CONSTANT_COLOR: number;
        static DESTINATION_ALPHA: number;
        static DESTINATION_COLOR: number;
        static ONE: number;
        static ONE_MINUS_CONSTANT_ALPHA: number;
        static ONE_MINUS_CONSTANT_COLOR: number;
        static ONE_MINUS_DESTINATION_ALPHA: number;
        static ONE_MINUS_DESTINATION_COLOR: number;
        static ONE_MINUS_SOURCE_ALPHA: number;
        static ONE_MINUS_SOURCE_COLOR: number;
        static SOURCE_ALPHA: number;
        static SOURCE_ALPHA_SATURATE: number;
        static SOURCE_COLOR: number;
        static ZERO: number;


        //Methods

    }


    export class BlendingState {
        constructor();
        //Members
        static ADDITIVE_BLEND: Object;
        static ALPHA_BLEND: Object;
        static DISABLED: Object;
        static PRE_MULTIPLIED_ALPHA_BLEND: Object;


        //Methods

    }


    export class BoxGeometry extends Geometry {
        constructor(options?: BoxGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(boxGeometry: BoxGeometry): Geometry | void;
        static fromAxisAlignedBoundingBox(boundingBox: AxisAlignedBoundingBox): BoxGeometry;
        static fromDimensions(options?: fromDimensionsOptions): BoxGeometry;
        static pack(value: BoxGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: BoxGeometry): BoxGeometry;

    }


    export class VertexFormat {
        constructor(options?: any);
        //Members
        static ALL: VertexFormat;
        static DEFAULT: VertexFormat;
        static packedLength: number;
        static POSITION_AND_COLOR: VertexFormat;
        static POSITION_AND_NORMAL: VertexFormat;
        static POSITION_AND_ST: VertexFormat;
        static POSITION_NORMAL_AND_ST: VertexFormat;
        static POSITION_ONLY: VertexFormat;
        binormal: boolean;
        color: boolean;
        normal: boolean;
        position: boolean;
        st: boolean;
        tangent: boolean;


        //Methods
        static clone(cartesian: VertexFormat, result?: VertexFormat): VertexFormat;
        static pack(value: VertexFormat, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: VertexFormat): VertexFormat;

    }


    export interface BoxGeometryOptions {
        minimum: Cartesian3;
        maximum: Cartesian3;
        vertexFormat?: VertexFormat;
    }


    export class Geometry {
        constructor(options?: GeometryOptions);
        //Members
        attributes: GeometryAttributes;
        boundingSphere: BoundingSphere;
        indices: Uint16Array | Uint32Array;
        primitiveType: PrimitiveType;


        //Methods
        static computeNumberOfVertices(geometry: Geometry): number;

    }

    export interface GeometryAttributesOptions {
        binormal?: GeometryAttribute;
        color?: GeometryAttribute;
        normal?: GeometryAttribute;
        position?: GeometryAttribute;
        st?: GeometryAttribute;
        tangent?: GeometryAttribute;
    }

    export class GeometryAttributes {
        constructor(options?: GeometryAttributesOptions);
        //Members
        binormal: GeometryAttribute;
        color: GeometryAttribute;
        normal: GeometryAttribute;
        position: GeometryAttribute;
        st: GeometryAttribute;
        tangent: GeometryAttribute;


        //Methods

    }


    export class GeometryAttribute {
        constructor(options?: GeometryAttributeOptions);
        //Members
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        values: TypedArray;


        //Methods

    }


    export class ComponentDatatype {
        constructor();
        //Members
        static DOUBLE: number;
        static INT: number;
        static UNSIGNED_INT: number;
        static BYTE: number;
        static FLOAT: number;
        static SHORT: number;
        static UNSIGNED_BYTE: number;
        static UNSIGNED_SHORT: number;


        //Methods
        static createArrayBufferView(componentDatatype: ComponentDatatype, buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
        static createTypedArray(componentDatatype: ComponentDatatype, valuesOrLength: number | Array<any>): Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
        static fromName(name: string): ComponentDatatype;
        static fromTypedArray(array: TypedArray): ComponentDatatype;
        static getSizeInBytes(componentDatatype: ComponentDatatype): number;
        static validate(componentDatatype: ComponentDatatype): boolean;

    }


    export interface GeometryAttributeOptions {
        componentDatatype?: ComponentDatatype;
        componentsPerAttribute?: number;
        normalize?: boolean;
        values?: TypedArray;
    }


    export enum PrimitiveType {
        LINE_LOOP,
        LINE_STRIP,
        LINES,
        POINTS,
        TRIANGLE_FAN,
        TRIANGLE_STRIP,
        TRIANGLES
    }


    export interface GeometryOptions {
        attributes: GeometryAttributes;
        primitiveType?: PrimitiveType;
        indices?: Uint16Array | Uint32Array;
        boundingSphere?: BoundingSphere;
    }


    export interface fromDimensionsOptions {
        dimensions: Cartesian3;
        vertexFormat?: VertexFormat;
    }


    export interface GeometryUpdater {
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export interface DynamicGeometryUpdater {
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): void;

    }


    export class GeometryInstance {
        constructor(options?: GeometryInstanceOptions);
        //Members
        attributes: Object;
        geometry: Geometry;
        id: Object;
        modelMatrix: Matrix4;


        //Methods

    }


    export interface GeometryInstanceOptions {
        geometry: Geometry;
        modelMatrix?: Matrix4;
        id?: Object;
        attributes?: Object;
    }


    export class BoxGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class BoxOutlineGeometry {
        constructor(options: BoxOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(boxGeometry: BoxOutlineGeometry): Geometry | void;
        static fromAxisAlignedBoundingBox(boundingBox: AxisAlignedBoundingBox): BoxOutlineGeometry;
        static fromDimensions(options: fromDimensionsOptions): BoxOutlineGeometry;
        static pack(value: BoxOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: BoxOutlineGeometry): BoxOutlineGeometry;

    }


    export interface BoxOutlineGeometryOptions {
        minimum: Cartesian3;
        maximum: Cartesian3;
    }


    export class CallbackProperty<T> implements Property<T>
    {
        constructor(callback: (time?: JulianDate, result?: T) => T, isConstant: boolean);
        //Members
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time?: JulianDate, result?: T): T;
        setCallback(callback: (time?: JulianDate, result?: T) => T, isConstant: boolean): void;

    }


    export class CameraEventAggregator {
        constructor(element?: HTMLCanvasElement);
        //Members
        anyButtonDown: boolean;
        currentMousePosition: Cartesian2;


        //Methods
        destroy(): void;
        getButtonPressTime(type: CameraEventType, modifier?: KeyboardEventModifier): Date;
        getButtonReleaseTime(type: CameraEventType, modifier?: KeyboardEventModifier): Date;
        getLastMovement(type: CameraEventType, modifier?: KeyboardEventModifier): Object | void;
        getMovement(type: CameraEventType, modifier?: KeyboardEventModifier): Object;
        getStartMousePosition(type: CameraEventType, modifier?: KeyboardEventModifier): Cartesian2;
        isButtonDown(type: CameraEventType, modifier?: KeyboardEventModifier): boolean;
        isDestroyed(): boolean;
        isMoving(type: CameraEventType, modifier?: KeyboardEventModifier): boolean;
        reset(): void;

    }


    export class KeyboardEventModifier {
        constructor();
        //Members
        static ALT: number;
        static CTRL: number;
        static SHIFT: number;


        //Methods

    }


    export function cancelAnimationFrame(requestID: number): void;


    export class CatmullRomSpline {
        constructor(options?: CatmullRomSplineOptions);
        //Members
        firstTangent: Cartesian3;
        lastTangent: Cartesian3;
        points: Array<Cartesian3>;
        times: Array<number>;


        //Methods
        evaluate(time: number, result?: Cartesian3): Cartesian3;
        findTimeInterval(time: number): number;

    }


    export interface CatmullRomSplineOptions {
        times: Array<number>;
        points: Array<Cartesian3>;
        firstTangent?: Cartesian3;
        lastTangent?: Cartesian3;
    }


    export class CesiumInspector {
        constructor(container: Element | string, scene: Scene);
        //Members
        container: Element;
        viewModel: CesiumInspectorViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class CesiumInspectorViewModel {
        constructor(scene: Scene);
        //Members
        decrementDepthFrustum: Command;
        depthFrustum: number;
        depthFrustumText: string;
        doFilterPrimitive: Command;
        doFilterTile: Command;
        doSuspendUpdates: Command;
        dropDownVisible: boolean;
        filterPrimitive: boolean;
        filterTile: boolean;
        frustums: boolean;
        frustumStatisticText: string;
        generalSwitchText: string;
        generalVisible: boolean;
        globeDepth: boolean;
        hasPickedPrimitive: boolean;
        hasPickedTile: boolean;
        incrementDepthFrustum: Command;
        performance: boolean;
        performanceContainer: Element;
        pickDepth: boolean;
        pickPimitiveActive: boolean;
        pickPrimitive: Command;
        pickTile: Command;
        pickTileActive: boolean;
        primitive: Command;
        primitiveBoundingSphere: boolean;
        primitiveReferenceFrame: boolean;
        primitivesSwitchText: string;
        primitivesVisible: boolean;
        scene: Scene;
        selectNE: Command;
        selectNW: Command;
        selectParent: Command;
        selectSE: Command;
        selectSW: Command;
        shaderCacheText: string;
        showFrustums: Command;
        showGlobeDepth: Command;
        showPerformance: Command;
        showPickDepth: Command;
        showPrimitiveBoundingSphere: Command;
        showPrimitiveReferenceFrame: Command;
        showTileBoundingSphere: Command;
        showTileCoordinates: Command;
        showWireframe: Command;
        suspendUpdates: boolean;
        terrainSwitchText: string;
        terrainVisible: boolean;
        tile: Command;
        tileBoundingSphere: boolean;
        tileCoordinates: boolean;
        tileText: string;
        toggleDropDown: Command;
        toggleGeneral: Command;
        togglePrimitives: Command;
        toggleTerrain: Command;
        wireframe: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class Math {
        constructor();
        //Members
        static DEGREES_PER_RADIAN: number;
        static EPSILON1: number;
        static EPSILON2: number;
        static EPSILON3: number;
        static EPSILON4: number;
        static EPSILON5: number;
        static EPSILON6: number;
        static EPSILON7: number;
        static EPSILON8: number;
        static EPSILON9: number;
        static EPSILON10: number;
        static EPSILON11: number;
        static EPSILON12: number;
        static EPSILON13: number;
        static EPSILON14: number;
        static EPSILON15: number;
        static EPSILON16: number;
        static EPSILON17: number;
        static EPSILON18: number;
        static EPSILON19: number;
        static EPSILON20: number;
        static GRAVITATIONALPARAMETER: number;
        static LUNAR_RADIUS: number;
        static ONE_OVER_PI: number;
        static ONE_OVER_TWO_PI: number;
        static PI: number;
        static PI_OVER_FOUR: number;
        static PI_OVER_SIX: number;
        static PI_OVER_THREE: number;
        static PI_OVER_TWO: number;
        static RADIANS_PER_ARCSECOND: number;
        static RADIANS_PER_DEGREE: number;
        static SIXTY_FOUR_KILOBYTES: number;
        static SOLAR_RADIUS: number;
        static THREE_PI_OVER_TWO: number;
        static TWO_PI: number;


        //Methods
        static acosClamped(value: number): number;
        static asinClamped(value: number): number;
        static chordLength(angle: number, radius: number): number;
        static clamp(value: number, min: number, max: number): number;
        static clampToLatitudeRange(angle: number): number;
        static convertLongitudeRange(angle: number): number;
        static cosh(value: number): number;
        static equalsEpsilon(left: number, right: number, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        static factorial(n: number): number;
        static fromSNorm(value: number, rangeMax?: number): number;
        static incrementWrap(n?: number, maximumValue?: number, minimumValue?: number): number;
        static isPowerOfTwo(n: number): boolean;
        static lerp(p: number, q: number, time: number): number;
        static logBase(number: number, base: number): number;
        static mod(m: number, n: number): number;
        static negativePiToPi(angle: number): number;
        static nextPowerOfTwo(n: number): number;
        static nextRandomNumber(): number;
        static setRandomNumberSeed(seed: number): void;
        static sign(value: number): number;
        static signNotZero(value: number): number;
        static sinh(value: number): number;
        static toDegrees(radians: number): number;
        static toRadians(degrees: number): number;
        static toSNorm(value: number, rangeMax?: number): number;
        static zeroToTwoPi(angle: number): number;

    }


    export class CesiumTerrainProvider implements TerrainProvider {
        constructor(options?: CesiumTerrainProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readyPromise: Promise<boolean>;
        requestVertexNormals: boolean;
        requestWaterMask: boolean;
        tilingScheme: GeographicTilingScheme;


        //Methods
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, throttleRequests?: boolean): Promise<TerrainData> | void;

    }


    export interface CesiumTerrainProviderOptions {
        url: string;
        proxy?: DefaultProxy;
        requestVertexNormals?: boolean;
        requestWaterMask?: boolean;
        ellipsoid?: Ellipsoid;
        credit?: Credit | string;
    }


    export class CesiumWidget {
        constructor(container: Element | string, options?: CesiumWidgetOptions);
        //Members
        camera: Camera;
        canvas: HTMLCanvasElement;
        clock: Clock;
        container: Element;
        creditContainer: Element;
        imageryLayers: ImageryLayerCollection;
        resolutionScale: number;
        scene: Scene;
        screenSpaceEventHandler: ScreenSpaceEventHandler;
        targetFrameRate: number;
        terrainProvider: TerrainProvider;
        useDefaultRenderLoop: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        render(): void;
        resize(): void;
        showErrorPanel(title: string, message: string, error?: string): void;

    }


    export interface CesiumWidgetOptions {
        clock?: Clock;
        imageryProvider?: ImageryProvider;
        terrainProvider?: TerrainProvider;
        skyBox?: SkyBox;
        skyAtmosphere?: SkyAtmosphere;
        sceneMode?: SceneMode;
        scene3DOnly?: boolean;
        orderIndependentTranslucency?: boolean;
        mapProjection?: MapProjection;
        globe?: Globe;
        useDefaultRenderLoop?: boolean;
        targetFrameRate?: number;
        showRenderLoopErrors?: boolean;
        contextOptions?: Object;
        creditContainer?: Element | string;
        terrainExaggeration?: number;
        shadows?: boolean;
        terrainShadows?: ShadowMode;
        mapMode2D?: MapMode2D;
    }


    export class ScreenSpaceEventHandler {
        constructor(element?: HTMLCanvasElement);
        //Members
        static mouseEmulationIgnoreMilliseconds: any;


        //Methods
        destroy(): void;
        getInputAction(type: number, modifier?: number): void;
        isDestroyed(): boolean;
        removeInputAction(type: number, modifier?: number): void;
        setInputAction(action: Function, type: number, modifier?: number): void;

    }


    export class CheckerboardMaterialProperty implements MaterialProperty {
        constructor(options?: CheckerboardMaterialPropertyOptions);
        //Members
        definitionChanged: Event;
        evenColor: Property<any>;
        isConstant: boolean;
        oddColor: Property<any>;
        repeat: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface CheckerboardMaterialPropertyOptions {
        evenColor?: PropertyOrValue<Color>;
        oddColor?: PropertyOrValue<Color>;
        repeat?: PropertyOrValue<any>;
    }


    export class CircleGeometry extends Geometry {
        constructor(options?: CircleGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(circleGeometry: CircleGeometry): Geometry | void;
        static pack(value: CircleGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CircleGeometry): CircleGeometry;

    }


    export interface CircleGeometryOptions {
        center: Cartesian3;
        radius: number;
        ellipsoid?: Ellipsoid;
        height?: number;
        granularity?: number;
        vertexFormat?: VertexFormat;
        extrudedHeight?: number;
        stRotation?: number;
    }


    export class CircleOutlineGeometry {
        constructor(options?: CircleOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(circleGeometry: CircleOutlineGeometry): Geometry | void;
        static pack(value: CircleOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CircleOutlineGeometry): CircleOutlineGeometry;

    }


    export interface CircleOutlineGeometryOptions {
        center: Cartesian3;
        radius: number;
        ellipsoid?: Ellipsoid;
        height?: number;
        granularity?: number;
        extrudedHeight?: number;
        numberOfVerticalLines?: number;
    }


    export function clone(object: any, deep?: boolean): Object;


    export class ColorGeometryInstanceAttribute {
        constructor(red?: number, green?: number, blue?: number, alpha?: number);
        //Members
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        value: Uint8Array;


        //Methods
        static equals(left?: ColorGeometryInstanceAttribute, right?: ColorGeometryInstanceAttribute): boolean;
        static fromColor(color: Color): ColorGeometryInstanceAttribute;
        static toValue(color: Color, result?: Uint8Array): Uint8Array;

    }


    export class ColorMaterialProperty implements MaterialProperty {
        constructor(color?: PropertyOrValue<Color>);
        //Members
        color: Property<Color>;
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export function combine(object1?: any, object2?: any, deep?: boolean): Object;


    export class CompositeProperty implements Property<any>
    {
        constructor();
        //Members
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: any): Object;

    }


    export class CompositeMaterialProperty extends CompositeProperty implements MaterialProperty {
        constructor();
        //Members
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export class CompositePositionProperty extends CompositeProperty implements PositionProperty {
        constructor(referenceFrame?: ReferenceFrame);
        //Members
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;

    }


    export class ConstantPositionProperty implements PositionProperty {
        constructor(value?: Cartesian3, referenceFrame?: ReferenceFrame);
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        setValue(value: Cartesian3, referenceFrame?: ReferenceFrame): void;

    }


    export class ConstantProperty<T> implements Property<T>
    {
        constructor(value?: T);
        //Members
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time?: JulianDate, result?: T): T;
        setValue(value: T): void;

    }


    export class CornerType {
        constructor();
        //Members
        static BEVELED: number;
        static MITERED: number;
        static ROUNDED: number;


        //Methods

    }


    export class CorridorGeometry {
        constructor(options?: CorridorGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(corridorGeometry: CorridorGeometry): Geometry | void;
        static pack(value: CorridorGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CorridorGeometry): CorridorGeometry;

    }


    export interface CorridorGeometryOptions {
        positions: Array<Cartesian3>;
        width: number;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        height?: number;
        extrudedHeight?: number;
        vertexFormat?: VertexFormat;
        cornerType?: CornerType;
    }


    export class CorridorGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        onTerrain: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class CorridorOutlineGeometry {
        constructor(options?: CorridorOutlineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(corridorOutlineGeometry: CorridorOutlineGeometry): Geometry | void;
        static pack(value: CorridorOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CorridorOutlineGeometry): CorridorOutlineGeometry;

    }


    export interface CorridorOutlineGeometryOptions {
        positions: Array<Cartesian3>;
        width: number;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        height?: number;
        extrudedHeight?: number;
        cornerType?: CornerType;
    }


    export function createCommand(func: (() => void), canExecute?: boolean): void;


    export function createGuid(): string;


    export function createOpenStreetMapImageryProvider(options?: createOpenStreetMapImageryProviderOptions): UrlTemplateImageryProvider;


    export interface createOpenStreetMapImageryProviderOptions {
        url?: string;
        fileExtension?: string;
        proxy?: Object;
        rectangle?: Rectangle;
        minimumLevel?: number;
        maximumLevel?: number;
        ellipsoid?: Ellipsoid;
        credit?: Credit | string;
    }


    export function createTangentSpaceDebugPrimitive(options?: createTangentSpaceDebugPrimitiveOptions): Primitive;


    export interface createTangentSpaceDebugPrimitiveOptions {
        geometry: Geometry;
        length?: number;
        modelMatrix?: Matrix4;
    }

    export interface TaskProcessorWorkerFunction {
        (event: Object): void;
    }

    export interface WorkerFunction {
        (parameters: Object, transferableObjects: Array<Object>): any;
    }

    export function createTaskProcessorWorker(workerFunction: any): TaskProcessorWorkerFunction;


    export function createTileMapServiceImageryProvider(options?: createTileMapServiceImageryProviderOptions): UrlTemplateImageryProvider;


    export interface createTileMapServiceImageryProviderOptions {
        url?: string;
        fileExtension?: string;
        proxy?: Object;
        credit?: Credit | string;
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle?: Rectangle;
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        tileWidth?: number;
        tileHeight?: number;
        flipXY?: boolean;
    }


    export class CreditDisplay {
        constructor(container: HTMLElement, delimiter?: string);
        //Members
        container: HTMLElement;


        //Methods
        addCredit(credit: Credit): void;
        addDefaultCredit(credit: Credit): void;
        beginFrame(credit: Credit): void;
        destroy(): void;
        endFrame(credit: Credit): void;
        isDestroyed(): boolean;
        removeDefaultCredit(credit: Credit): void;

    }


    export class CubicRealPolynomial {
        constructor();
        //Members


        //Methods
        static computeDiscriminant(a: number, b: number, c: number, d: number): number;
        static computeRealRoots(a: number, b: number, c: number, d: number): Array<number>;

    }


    export class CullFace {
        constructor();
        //Members
        static BACK: number;
        static FRONT: number;
        static FRONT_AND_BACK: number;


        //Methods

    }


    export class CustomDataSource implements DataSource {
        constructor(name?: string);
        //Members
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        show: boolean;


        //Methods
        update(time: JulianDate): boolean;

    }


    export class CylinderGeometry {
        constructor(options?: CylinderGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(cylinderGeometry: CylinderGeometry): Geometry | void;
        static pack(value: CylinderGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CylinderGeometry): CylinderGeometry;

    }


    export interface CylinderGeometryOptions {
        length: number;
        topRadius: number;
        bottomRadius: number;
        slices?: number;
        vertexFormat?: VertexFormat;
    }


    export class CylinderGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class CylinderOutlineGeometry {
        constructor(options?: CylinderOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(cylinderGeometry: CylinderOutlineGeometry): Geometry | void;
        static pack(value: CylinderOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: CylinderOutlineGeometry): CylinderOutlineGeometry;

    }


    export interface CylinderOutlineGeometryOptions {
        length: number;
        topRadius: number;
        bottomRadius: number;
        slices?: number;
        numberOfVerticalLines?: number;
    }

    export interface CzmlDataSourceLoadOptions {
        sourceUri?: string;
    }

    export class CzmlDataSource implements DataSource {
        constructor(name?: string);
        //Members
        static updaters: Array<any>;
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        show: boolean;


        //Methods
        static load(data: string | any, options?: CzmlDataSourceLoadOptions): Promise<CzmlDataSource>;
        static processMaterialPacketData(object: any, propertyName: string, packetData: any, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        static processPacketData(type: (() => void), object: any, propertyName: string, packetData: any, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        static processPositionPacketData(object: any, propertyName: string, packetData: any, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        load(czml: string | any, options?: CzmlDataSourceLoadOptions): Promise<CzmlDataSource>;
        process(czml: string | any, options?: processOptions): Promise<CzmlDataSource>;
        update(time: JulianDate): boolean;
    }

    export interface processOptions {
        sourceUri?: string;
    }


    export class DataSourceCollection {
        constructor();
        //Members
        dataSourceAdded: Event;
        dataSourceRemoved: Event;
        length: number;


        //Methods
        add(dataSource: DataSource | Promise<DataSource>): Promise<DataSource>;
        contains(dataSource: DataSource): boolean;
        destroy(): void;
        get(index: number): DataSource;
        indexOf(dataSource: DataSource): number;
        isDestroyed(): boolean;
        remove(dataSource: DataSource, destroy?: boolean): boolean;
        removeAll(destroy?: boolean): void;

    }


    export class DataSourceDisplay {
        constructor(options?: DataSourceDisplayOptions);
        //Members
        static defaultVisualizersCallback: any;
        dataSources: DataSourceCollection;
        defaultDataSource: CustomDataSource;
        ready: boolean;
        scene: Scene;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export interface DataSourceDisplayOptions {
        scene: Scene;
        dataSourceCollection: DataSourceCollection;
        visualizersCallback?: any;
    }


    export class DebugAppearance {
        constructor(options?: DebugAppearanceOptions);
        //Members
        attributeName: string;
        closed: boolean;
        fragmentShaderSource: string;
        glslDatatype: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface DebugAppearanceOptions {
        attributeName: string;
        perInstanceAttribute: boolean;
        glslDatatype?: string;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class DebugCameraPrimitive {
        constructor(options?: DebugCameraPrimitiveOptions);
        //Members
        id: Object;
        show: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface DebugCameraPrimitiveOptions {
        camera: Camera;
        color?: Color;
        updateOnChange?: boolean;
        show?: boolean;
        id?: Object;
    }


    export class DebugModelMatrixPrimitive {
        constructor(options?: DebugModelMatrixPrimitiveOptions);
        //Members
        id: Object;
        length: number;
        modelMatrix: Matrix4;
        show: boolean;
        width: number;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface DebugModelMatrixPrimitiveOptions {
        length?: number;
        width?: number;
        modelMatrix?: Matrix4;
        show?: boolean;
        id?: Object;
    }


    export function defaultValue<T>(a, b: T): T;


    export function defined(value: any): boolean;


    export class DepthFunction {
        constructor();
        //Members
        static ALWAYS: number;
        static EQUAL: number;
        static GREATER: number;
        static GREATER_OR_EQUAL: number;
        static LESS: number;
        static LESS_OR_EQUAL: number;
        static NEVER: number;
        static NOT_EQUAL: number;


        //Methods

    }


    export function destroyObject(object: any, message?: string): void;


    export class DeveloperError {
        constructor(message?: string);
        //Members
        message: string;
        name: string;
        stack: string;


        //Methods

    }


    export class DiscardMissingTileImagePolicy {
        constructor(options?: DiscardMissingTileImagePolicyOptions);
        //Members


        //Methods
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement): boolean;

    }


    export interface DiscardMissingTileImagePolicyOptions {
        missingImageUrl: string;
        pixelsToCheck: Array<Cartesian2>;
        disableCheckIfAllPixelsAreTransparent?: boolean;
    }


    export class DistanceDisplayConditionGeometryInstanceAttribute {
        constructor(near?: number, far?: number);
        //Members
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        value: Float32Array;


        //Methods
        static fromDistanceDisplayCondition(distanceDisplayCondition: DistanceDisplayCondition): DistanceDisplayConditionGeometryInstanceAttribute;
        static toValue(distanceDisplayCondition: DistanceDisplayCondition, result?: Float32Array): Float32Array;

    }


    export class EllipseGeometry extends Geometry {
        constructor(options?: EllipseGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(ellipseGeometry: EllipseGeometry): Geometry | void;
        static pack(value: EllipseGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: EllipseGeometry): EllipseGeometry;

    }


    export interface EllipseGeometryOptions {
        center: Cartesian3;
        semiMajorAxis: number;
        semiMinorAxis: number;
        ellipsoid?: Ellipsoid;
        height?: number;
        extrudedHeight?: number;
        rotation?: number;
        stRotation?: number;
        granularity?: number;
        vertexFormat?: VertexFormat;
    }


    export class EllipseGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        onTerrain: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class EllipseOutlineGeometry {
        constructor(options?: EllipseOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(ellipseGeometry: EllipseOutlineGeometry): Geometry | void;
        static pack(value: EllipseOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: EllipseOutlineGeometry): EllipseOutlineGeometry;

    }


    export interface EllipseOutlineGeometryOptions {
        center: Cartesian3;
        semiMajorAxis: number;
        semiMinorAxis: number;
        ellipsoid?: Ellipsoid;
        height?: number;
        extrudedHeight?: number;
        rotation?: number;
        granularity?: number;
        numberOfVerticalLines?: number;
    }


    export class EllipsoidGeodesic {
        constructor(start?: Cartographic, end?: Cartographic, ellipsoid?: Ellipsoid);
        //Members
        ellipsoid: Ellipsoid;
        end: Cartographic;
        endHeading: number;
        start: Cartographic;
        startHeading: number;
        surfaceDistance: number;


        //Methods
        interpolateUsingFraction(fraction: number): Cartographic;
        interpolateUsingSurfaceDistance(distance: number): Cartographic;
        setEndPoints(start: Cartographic, end: Cartographic): void;

    }


    export class EllipsoidGeometry extends Geometry {
        constructor(options?: EllipsoidGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(ellipsoidGeometry: EllipsoidGeometry): Geometry | void;
        static pack(value: EllipsoidGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: EllipsoidGeometry): EllipsoidGeometry;

    }


    export interface EllipsoidGeometryOptions {
        radii?: Cartesian3;
        stackPartitions?: number;
        slicePartitions?: number;
        vertexFormat?: VertexFormat;
    }


    export class EllipsoidGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class EllipsoidOutlineGeometry {
        constructor(options?: EllipsoidOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(ellipsoidGeometry: EllipsoidOutlineGeometry): Geometry | void;
        static pack(value: EllipsoidOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: EllipsoidOutlineGeometry): EllipsoidOutlineGeometry;

    }


    export interface EllipsoidOutlineGeometryOptions {
        radii?: Cartesian3;
        stackPartitions?: number;
        slicePartitions?: number;
        subdivisions?: number;
    }


    export class EllipsoidSurfaceAppearance {
        constructor(options?: EllipsoidSurfaceAppearanceOptions);
        //Members
        static VERTEX_FORMAT: VertexFormat;
        aboveGround: boolean;
        closed: boolean;
        faceForward: boolean;
        flat: boolean;
        fragmentShaderSource: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexFormat: VertexFormat;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface EllipsoidSurfaceAppearanceOptions {
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        aboveGround?: boolean;
        material?: Material;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class EllipsoidTangentPlane {
        constructor(origin: Cartesian3, ellipsoid?: Ellipsoid);
        //Members
        ellipsoid: Ellipsoid;
        origin: Cartesian3;
        plane: Plane;
        xAxis: Cartesian3;
        yAxis: Cartesian3;


        //Methods
        static fromPoints(ellipsoid: Ellipsoid, cartesians: Cartesian3): void;
        projectPointOntoPlane(cartesian: Cartesian3, result?: Cartesian2): Cartesian2;
        projectPointsOntoEllipsoid(cartesians: Array<Cartesian2>, result?: Array<Cartesian3>): Array<Cartesian3>;
        projectPointsOntoPlane(cartesians: Array<Cartesian3>, result?: Array<Cartesian2>): Array<Cartesian2>;
        projectPointsToNearestOnPlane(cartesians: Array<Cartesian3>, result?: Array<Cartesian2>): Array<Cartesian2>;
        projectPointToNearestOnPlane(cartesian: Cartesian3, result?: Cartesian2): Cartesian2;

    }


    export class EllipsoidTerrainProvider {
        constructor(options?: EllipsoidTerrainProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readyPromise: Promise<boolean>;
        tilingScheme: GeographicTilingScheme;


        //Methods
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, throttleRequests?: boolean): Promise<TerrainData> | void;

    }


    export interface EllipsoidTerrainProviderOptions {
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
    }


    export class EntityView {
        constructor(entity: Entity, scene: Scene, ellipsoid?: Ellipsoid);
        //Members
        static defaultOffset3D: Cartesian3;
        boundingSphere: BoundingSphere;
        ellipsoid: Ellipsoid;
        entity: Entity;
        scene: Scene;


        //Methods
        update(time: JulianDate, current: BoundingSphere): void;

    }


    export class EventHelper {
        constructor();
        //Members


        //Methods
        add(event: Event, listener: (() => void), scope?: any): any;
        removeAll(): void;

    }


    export class ExtrapolationType {
        constructor();
        //Members
        static EXTRAPOLATE: number;
        static HOLD: number;
        static NONE: number;


        //Methods

    }


    export class FeatureDetection {
        constructor();
        //Members


        //Methods
        static supportsFullscreen(): boolean;
        static supportsTypedArrays(): boolean;
        static supportsWebWorkers(): boolean;

    }


    export function formatError(object: any): string;


    export class FrameRateMonitor {
        constructor(options?: FrameRateMonitorOptions);
        //Members
        static defaultSettings: Object;
        lastFramesPerSecond: number;
        lowFrameRate: Event;
        minimumFrameRateAfterWarmup: number;
        minimumFrameRateDuringWarmup: number;
        nominalFrameRate: Event;
        quietPeriod: number;
        samplingWindow: number;
        scene: Scene;
        warmupPeriod: number;


        //Methods
        static fromScene(scene: Scene): FrameRateMonitor;
        destroy(): void;
        isDestroyed(): boolean;
        pause(): void;
        unpause(): void;

    }


    export interface FrameRateMonitorOptions {
        scene: Scene;
        samplingWindow?: number;
        quietPeriod?: number;
        warmupPeriod?: number;
        minimumFrameRateDuringWarmup?: number;
        minimumFrameRateAfterWarmup?: number;
    }


    export class Fullscreen {
        constructor();
        //Members
        static changeEventName: string;
        static element: Object;
        static enabled: boolean;
        static errorEventName: string;
        static fullscreen: boolean;


        //Methods
        static exitFullscreen(): void;
        static requestFullscreen(element: any, vrDevice?: HMDVRDevice): void;
        static supportsFullscreen(): boolean;

    }


    export class FullscreenButton {
        constructor(container: Element | string, fullscreenElement?: Element | string);
        //Members
        container: Element;
        viewModel: FullscreenButtonViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class FullscreenButtonViewModel {
        constructor(fullscreenElement?: Element | string);
        //Members
        command: Command;
        fullscreenElement: Element;
        isFullscreen: boolean;
        isFullscreenEnabled: boolean;
        tooltip: string;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class Geocoder {
        constructor(options?: GeocoderOptions);
        //Members
        container: Element;
        viewModel: GeocoderViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface GeocoderOptions {
        container: Element | string;
        scene: Scene;
        url?: string;
        key?: string;
        flightDuration?: number;
    }


    export class GeocoderViewModel {
        constructor(options?: GeocoderViewModelOptions);
        //Members
        complete: Event;
        flightDuration: number | void;
        isSearchInProgress: boolean;
        keepExpanded: boolean;
        key: string;
        scene: Scene;
        search: Command;
        searchText: string;
        url: string;


        //Methods

    }


    export interface GeocoderViewModelOptions {
        scene: Scene;
        url?: string;
        key?: string;
        flightDuration?: number;
    }


    export class GeographicProjection {
        constructor(ellipsoid?: Ellipsoid);
        //Members
        ellipsoid: Ellipsoid;


        //Methods
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;

    }


    export interface GeoJsonDataSourceStaticLoadOptions {
        sourceUri?: string;
        markerSize?: number;
        markerSymbol?: string;
        markerColor?: Color;
        stroke?: Color;
        strokeWidth?: number;
        fill?: Color;
        clampToGround?: boolean;
    }

    export interface GeoJsonDataSourceLoadOptions {
        sourceUri?: string;
        markerSize?: number;
        markerSymbol?: string;
        markerColor?: Color;
        stroke?: Color;
        strokeWidth?: number;
        fill?: Color;
        clampToGround?: boolean;
        describe?: (properties: any, nameProperty: string) => void;
    }

    export class GeoJsonDataSource implements DataSource {
        constructor(name?: string);
        //Members
        static clampToGround: boolean;
        static crsLinkHrefs: Object;
        static crsLinkTypes: Object;
        static crsNames: Object;
        static fill: Color;
        static markerColor: Color;
        static markerSize: number;
        static markerSymbol: string;
        static stroke: Color;
        static strokeWidth: number;
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        show: boolean;


        //Methods
        static load(data: string | any, options?: GeoJsonDataSourceStaticLoadOptions): Promise<GeoJsonDataSource>;
        load(data: string | any, options?: GeoJsonDataSourceLoadOptions): Promise<GeoJsonDataSource>;
        update(time: JulianDate): boolean;
    }


    export class GeometryInstanceAttribute {
        constructor(options?: GeometryInstanceAttributeOptions);
        //Members
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        value: Array<number>;


        //Methods

    }


    export interface GeometryInstanceAttributeOptions {
        componentDatatype?: ComponentDatatype;
        componentsPerAttribute?: number;
        normalize?: boolean;
        value?: Array<number>;
    }


    export class GeometryPipeline {
        constructor();
        //Members


        //Methods
        static compressVertices(geometry: Geometry): Geometry;
        static computeBinormalAndTangent(geometry: Geometry): Geometry;
        static computeNormal(geometry: Geometry): Geometry;
        static createAttributeLocations(geometry: Geometry): Object;
        static createLineSegmentsForVectors(geometry: Geometry, attributeName?: string, length?: number): Geometry;
        static encodeAttribute(geometry: Geometry, attributeName: string, attributeHighName: string, attributeLowName: string): Geometry;
        static fitToUnsignedShortIndices(geometry: Geometry): Array<Geometry>;
        static projectTo2D(geometry: Geometry, attributeName: string, attributeName3D: string, attributeName2D: string, projection?: any): Geometry;
        static reorderForPostVertexCache(geometry: Geometry, cacheCapacity?: number): Geometry;
        static reorderForPreVertexCache(geometry: Geometry): Geometry;
        static toWireframe(geometry: Geometry): Geometry;
        static transformToWorldCoordinates(instance: GeometryInstance): GeometryInstance;

    }


    export class GeometryVisualizer {
        constructor(type: GeometryUpdater, scene: Scene, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export function getAbsoluteUri(relative: string, base?: string): string;


    export function getBaseUri(uri: string, includeQuery?: boolean): string;


    export function getExtensionFromUri(uri: string): string;


    export class GetFeatureInfoFormat {
        constructor(type: string, format?: string, callback?: (() => void));
        //Members


        //Methods

    }


    export function getFilenameFromUri(uri: string): string;


    export function getImagePixels(image: HTMLImageElement): CanvasPixelArray;


    export function getTimestamp(): number;


    export class GoogleEarthImageryProvider extends ImageryProvider {
        constructor(options?: GoogleEarthImageryProviderOptions);
        //Members
        channel: number;
        credit: Credit;
        defaultGamma: number;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        path: string;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        requestType: string;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;
        version: number;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface GoogleEarthImageryProviderOptions {
        url: string;
        channel: number;
        path?: string;
        maximumLevel?: number;
        tileDiscardPolicy?: TileDiscardPolicy;
        ellipsoid?: Ellipsoid;
        proxy?: DefaultProxy;
    }


    export class GridImageryProvider {
        constructor(options?: GridImageryProviderOptions, backgroundColor?: Color);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;


        //Methods
        _createGridCanvas(): void;
        _drawGrid(): void;
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface GridImageryProviderOptions {
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        cells?: number;
        color?: Color;
        glowColor?: Color;
        glowWidth?: number;
    }


    export class GridMaterialProperty implements MaterialProperty {
        constructor(options?: GridMaterialPropertyOptions);
        //Members
        cellAlpha: Property<any>;
        color: Property<any>;
        definitionChanged: Event;
        isConstant: boolean;
        lineCount: Property<any>;
        lineOffset: Property<any>;
        lineThickness: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface GridMaterialPropertyOptions {
        color?: PropertyOrValue<any>;
        cellAlpha?: PropertyOrValue<any>;
        lineCount?: PropertyOrValue<any>;
        lineThickness?: PropertyOrValue<any>;
        lineOffset?: PropertyOrValue<any>;
    }


    export class GroundPrimitive {
        constructor(options?: GroundPrimitiveOptions);
        //Members
        allowPicking: boolean;
        asynchronous: boolean;
        compressVertices: boolean;
        debugShowBoundingVolume: boolean;
        debugShowShadowVolume: boolean;
        geometryInstances: Array<any> | GeometryInstance;
        interleave: boolean;
        ready: boolean;
        readyPromise: Promise<GroundPrimitive>;
        releaseGeometryInstances: boolean;
        show: boolean;
        vertexCacheOptimize: boolean;


        //Methods
        static initializeTerrainHeights(): Promise<any>;
        static isSupported(scene: Scene): boolean;
        destroy(): void;
        getGeometryInstanceAttributes(id: any): Object;
        isDestroyed(): boolean;
        update(): void;

    }


    export interface GroundPrimitiveOptions {
        geometryInstances?: Array<any> | GeometryInstance;
        show?: boolean;
        vertexCacheOptimize?: boolean;
        interleave?: boolean;
        compressVertices?: boolean;
        releaseGeometryInstances?: boolean;
        allowPicking?: boolean;
        asynchronous?: boolean;
        debugShowBoundingVolume?: boolean;
        debugShowShadowVolume?: boolean;
    }


    export class HeightmapTerrainData {
        constructor(options?: HeightmapTerrainDataOptions);
        //Members
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;


        //Methods
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<HeightmapTerrainData> | void;
        wasCreatedByUpsampling(): boolean;

    }


    export interface HeightmapTerrainDataOptions {
        heightScale?: number;
        heightOffset?: number;
        elementsPerHeight?: number;
        stride?: number;
        elementMultiplier?: number;
        isBigEndian?: boolean;
        lowestEncodedHeight?: number;
        highestEncodedHeight?: number;
    }


    export class HermitePolynomialApproximation {
        constructor();
        //Members


        //Methods
        static getRequiredDataPoints(degree: number, inputOrder?: number): number;
        static interpolate(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, inputOrder: number, outputOrder: number, result?: Array<number>): Array<number>;
        static interpolateOrderZero(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, result?: Array<number>): Array<number>;

    }


    export class HermiteSpline {
        constructor(options: HermiteSplineOptions);
        //Members
        inTangents: Array<Cartesian3>;
        outTangents: Array<Cartesian3>;
        points: Array<Cartesian3>;
        times: Array<number>;


        //Methods
        static createC1(options: createC1Options): HermiteSpline;
        static createClampedCubic(options: createClampedCubicOptions): HermiteSpline | LinearSpline;
        static createNaturalCubic(options: createNaturalCubicOptions): HermiteSpline | LinearSpline;
        evaluate(time: number, result?: Cartesian3): Cartesian3;
        findTimeInterval(time: number): number;

    }


    export interface HermiteSplineOptions {
        times: Array<number>;
        points: Array<Cartesian3>;
        inTangents: Array<Cartesian3>;
        outTangents: Array<Cartesian3>;
    }


    export interface createC1Options {
        times: Array<number>;
        points: Array<Cartesian3>;
        tangents: Array<Cartesian3>;
    }


    export class LinearSpline {
        constructor(options: LinearSplineOptions);
        //Members
        points: Array<Cartesian3>;
        times: Array<number>;


        //Methods
        evaluate(time: number, result?: Cartesian3): Cartesian3;
        findTimeInterval(time: number): number;

    }


    export interface LinearSplineOptions {
        times: Array<number>;
        points: Array<Cartesian3>;
    }


    export interface createClampedCubicOptions {
        times: Array<number>;
        points: Array<Cartesian3>;
        firstTangent: Cartesian3;
        lastTangent: Cartesian3;
    }


    export interface createNaturalCubicOptions {
        times: Array<number>;
        points: Array<Cartesian3>;
    }


    export class HomeButton {
        constructor(container: Element | string, scene: Scene, duration?: number);
        //Members
        container: Element;
        viewModel: HomeButtonViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class HomeButtonViewModel {
        constructor(scene: Scene, duration?: number);
        //Members
        command: Command;
        duration: number | void;
        scene: Scene;
        tooltip: string;


        //Methods

    }


    export class ImageMaterialProperty implements MaterialProperty {
        constructor(options?: ImageMaterialPropertyOptions);
        //Members
        color: Property<any>;
        definitionChanged: Event;
        image: Property<any>;
        isConstant: boolean;
        repeat: Property<any>;
        transparent: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface ImageMaterialPropertyOptions {
        image?: PropertyOrValue<any>;
        repeat?: PropertyOrValue<any>;
        color?: PropertyOrValue<any>;
        transparent?: PropertyOrValue<any>;
    }


    export class IndexDatatype {
        constructor();
        //Members
        static UNSIGNED_BYTE: number;
        static UNSIGNED_INT: number;
        static UNSIGNED_SHORT: number;


        //Methods
        static createTypedArray(numberOfVertices: number, indicesLengthOrArray: any): Uint16Array | Uint32Array;
        static createTypedArrayFromArrayBuffer(numberOfVertices: number, sourceArray: ArrayBuffer, byteOffset: number, length: number): Uint16Array | Uint32Array;
        static getSizeInBytes(indexDatatype: IndexDatatype): number;
        static validate(indexDatatype: IndexDatatype): boolean;

    }


    export class InfoBox {
        constructor(container: Element | string);
        //Members
        container: Element;
        frame: HTMLIFrameElement;
        viewModel: InfoBoxViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class InfoBoxViewModel {
        constructor();
        //Members
        cameraClicked: Event;
        cameraIconPath: string;
        closeClicked: Event;
        description: string;
        enableCamera: boolean;
        isCameraTracking: boolean;
        maxHeight: number;
        showInfo: boolean;
        titleText: string;


        //Methods
        maxHeightOffset(offset: number): string;

    }


    export class InterpolationAlgorithm {
        //Members
        static type: string;


        //Methods
        static getRequiredDataPoints(degree: number): number;
        static interpolate(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, inputOrder: number, outputOrder: number, result?: Array<number>): Array<number>;
        static interpolateOrderZero(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, result?: Array<number>): Array<number>;

    }


    export class Intersections2D {
        constructor();
        //Members


        //Methods
        static clipTriangleAtAxisAlignedThreshold(threshold: number, keepAbove: boolean, u0: number, u1: number, u2: number, result?: Array<number>): Array<number>;
        static computeBarycentricCoordinates(x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, result?: Cartesian3): Cartesian3;

    }


    export class IntersectionTests {
        constructor();
        //Members


        //Methods
        static lineSegmentSphere(p0: Cartesian3, p1: Cartesian3, sphere: BoundingSphere, result?: any): any;
        static lineSegmentTriangle(v0: Cartesian3, v1: Cartesian3, p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, cullBackFaces?: boolean, result?: Cartesian3): Cartesian3;
        static raySphere(ray: Ray, sphere: BoundingSphere, result?: any): any;
        static rayTriangle(ray: Ray, p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, cullBackFaces?: boolean, result?: Cartesian3): Cartesian3;
        static rayTriangleParametric(ray: Ray, p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, cullBackFaces?: boolean): number;
        static grazingAltitudeLocation(ray: Ray, ellipsoid: Ellipsoid): Cartesian3;
        static lineSegmentPlane(endPoint0: Cartesian3, endPoint1: Cartesian3, plane: Plane, result?: Cartesian3): Cartesian3;
        static rayEllipsoid(ray: Ray, ellipsoid: Ellipsoid): any;
        static rayPlane(ray: Ray, plane: Plane, result?: Cartesian3): Cartesian3;
        static trianglePlaneIntersection(p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, plane: Plane): any;

    }


    export function isArray(value: any): boolean;


    export function isLeapYear(year: number): boolean;


    export class Iso8601 {
        constructor();
        //Members
        static MAXIMUM_INTERVAL: any;
        static MAXIMUM_VALUE: any;
        static MINIMUM_VALUE: any;


        //Methods

    }


    export interface KmlDataSourceStaticLoadOptions {
        camera?: Camera;
        canvas?: HTMLCanvasElement;
        proxy?: DefaultProxy;
        sourceUri?: string;
        clampToGround?: boolean;
    }

    export interface KmlDataSourceLoadOptions {
        sourceUri?: string;
        clampToGround?: boolean;
    }

    export class KmlDataSource implements DataSource {
        constructor();
        //Members
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        refreshEvent: Event;
        show: boolean;
        unsupportedNodeEvent: Event;


        //Methods
        static load(data: string | Document | Blob, options?: KmlDataSourceStaticLoadOptions): Promise<KmlDataSource>;
        load(data: string | Document | Blob, options?: KmlDataSourceLoadOptions): Promise<KmlDataSource>;
        update(time: JulianDate): boolean;

    }


    export namespace KmlFeatureData {
        export interface Author {
            email: string;
            name: string;
            uri: string;
        }
        export interface Link {
            href: string;
            hreflang: string;
            length: string;
            rel: string;
            title: string;
            type: string;
        }
    }

    export class KmlFeatureData {
        constructor();
        //Members
        address: string;
        author: KmlFeatureData.Author;
        extendedData: string;
        link: KmlFeatureData.Link;
        phoneNumber: string;
        snippet: string;


        //Methods

    }


    export class Label {
        constructor();
        //Members
        distanceDisplayCondition: DistanceDisplayCondition;
        eyeOffset: Cartesian3;
        fillColor: Color;
        font: string;
        heightReference: HeightReference;
        horizontalOrigin: HorizontalOrigin;
        id: any;
        outlineColor: Color;
        outlineWidth: number;
        pixelOffset: Cartesian2;
        pixelOffsetScaleByDistance: NearFarScalar;
        position: Cartesian3;
        scale: number;
        show: boolean;
        style: LabelStyle;
        text: string;
        translucencyByDistance: NearFarScalar;
        verticalOrigin: VerticalOrigin;


        //Methods
        computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
        equals(other: Label): boolean;
        isDestroyed(): boolean;

    }


    export class LabelStyle {
        constructor();
        //Members
        static FILL: number;
        static FILL_AND_OUTLINE: number;
        static OUTLINE: number;


        //Methods

    }


    export class LabelCollection {
        constructor(options?: LabelCollectionOptions);
        //Members
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;


        //Methods
        add(options?: any): Label;
        contains(label: Label): boolean;
        destroy(): void;
        get(index: number): Label;
        isDestroyed(): boolean;
        remove(label: Label): boolean;
        removeAll(): void;

    }


    export interface LabelCollectionOptions {
        modelMatrix?: Matrix4;
        debugShowBoundingVolume?: boolean;
        scene?: Scene;
    }


    export class LabelVisualizer implements Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class LagrangePolynomialApproximation extends InterpolationAlgorithm {
        constructor();
        //Members


        //Methods
        static getRequiredDataPoints(degree: number): number;
        static interpolateOrderZero(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, result?: Array<number>): Array<number>;

    }


    export class LinearApproximation {
        constructor();
        //Members


        //Methods
        static getRequiredDataPoints(degree: number): number;
        static interpolateOrderZero(x: number, xTable: Array<number>, yTable: Array<number>, yStride: number, result?: Array<number>): Array<number>;

    }


    export function loadArrayBuffer(url: string | Promise<string>, headers?: any): Promise<ArrayBuffer>;


    export function loadBlob(url: string | Promise<string>, headers?: any): Promise<Blob>;


    export function loadImage(url: string | Promise<string>, allowCrossOrigin?: boolean): Promise<HTMLImageElement>;


    export function loadImageViaBlob(url: string | Promise<string>): Promise<HTMLImageElement>;


    export function loadJson(url: string | Promise<string>, headers?: any): Promise<Object>;


    export function loadJsonp(url: string, options?: loadJsonpOptions): Promise<Object>;


    export interface loadJsonpOptions {
        parameters?: Object;
        callbackParameterName?: string;
        proxy?: DefaultProxy;
    }


    export function loadText(url: string | Promise<string>, headers?: any): Promise<string>;


    export function loadWithXhr(options?: loadWithXhrOptions): Promise<Object>;


    export interface loadWithXhrOptions {
        url: string | Promise<string>;
        responseType?: string;
        method?: string;
        data?: string;
        headers?: Object;
        overrideMimeType?: string;
    }


    export function loadXML(url: string | Promise<string>, headers?: any): Promise<XMLDocument>;


    export class MapboxImageryProvider extends ImageryProvider {
        constructor(options?: MapboxImageryProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface MapboxImageryProviderOptions {
        url?: string;
        mapId: string;
        accessToken?: string;
        format?: string;
        proxy?: Object;
        ellipsoid?: Ellipsoid;
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle?: Rectangle;
        credit?: Credit | string;
    }


    export class MaterialAppearance {
        constructor(options?: MaterialAppearanceOptions);
        //Members
        static MaterialSupport: any;
        closed: boolean;
        faceForward: boolean;
        flat: boolean;
        fragmentShaderSource: string;
        material: Material;
        materialSupport: any;
        renderState: Object;
        translucent: boolean;
        vertexFormat: VertexFormat;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface MaterialAppearanceOptions {
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        materialSupport?: any;
        material?: Material;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class Matrix2 {
        constructor(column0Row0?: number, column1Row0?: number, column0Row1?: number, column1Row1?: number);
        //Members
        length: number;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        static IDENTITY: Matrix2;
        static packedLength: number;
        static ZERO: Matrix2;


        //Methods
        clone(result?: Matrix2): Matrix2;
        equals(right?: Matrix2): boolean;
        equalsEpsilon(right?: Matrix2, epsilon?: number): boolean;
        toString(): string;
        static abs(matrix: Matrix2, result: Matrix2): Matrix2;
        static add(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static clone(matrix: Matrix2, result?: Matrix2): Matrix2;
        static equals(left?: Matrix2, right?: Matrix2): boolean;
        static equalsEpsilon(left?: Matrix2, right?: Matrix2, epsilon?: number): boolean;
        static fromArray(array: Array<number>, startingIndex?: number, result?: Matrix2): Matrix2;
        static fromColumnMajorArray(values: Array<number>, result?: Matrix2): Matrix2;
        static fromRotation(angle: number, result?: Matrix2): Matrix2;
        static fromRowMajorArray(values: Array<number>, result?: Matrix2): Matrix2;
        static fromScale(scale: Cartesian2, result?: Matrix2): Matrix2;
        static fromUniformScale(scale: number, result?: Matrix2): Matrix2;
        static getColumn(matrix: Matrix2, index: number, result: Cartesian2): Cartesian2;
        static getElementIndex(row: number, column: number): number;
        static getMaximumScale(matrix: Matrix2): number;
        static getRow(matrix: Matrix2, index: number, result: Cartesian2): Cartesian2;
        static getScale(matrix: Matrix2, result: Cartesian2): Cartesian2;
        static multiply(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static multiplyByScalar(matrix: Matrix2, scalar: number, result: Matrix2): Matrix2;
        static multiplyByScale(matrix: Matrix2, scale: Cartesian2, result: Matrix2): Matrix2;
        static multiplyByVector(matrix: Matrix2, cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static negate(matrix: Matrix2, result: Matrix2): Matrix2;
        static pack(value: Matrix2, array: Array<number>, startingIndex?: number): Array<number>;
        static setColumn(matrix: Matrix2, index: number, cartesian: Cartesian2, result: Cartesian2): Matrix2;
        static setRow(matrix: Matrix2, index: number, cartesian: Cartesian2, result: Matrix2): Matrix2;
        static subtract(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static toArray(matrix: Matrix2, result?: Array<number>): Array<number>;
        static transpose(matrix: Matrix2, result: Matrix2): Matrix2;
        static unpack(array: Array<number>, startingIndex?: number, result?: Matrix2): Matrix2;

    }


    export function mergeSort(array: Array<any>, comparator: any, userDefinedObject?: any): void;


    export class Model {
        constructor(options?: ModelOptions);
        //Members
        activeAnimations: ModelAnimationCollection;
        allowPicking: boolean;
        asynchronous: boolean;
        basePath: string;
        boundingSphere: BoundingSphere;
        debugShowBoundingVolume: boolean;
        debugWireframe: boolean;
        distanceDisplayCondition: DistanceDisplayCondition;
        gltf: Object;
        id: Object;
        incrementallyLoadTextures: boolean;
        maximumScale: number;
        minimumPixelSize: number;
        modelMatrix: Matrix4;
        pendingTextureLoads: number;
        ready: boolean;
        readyPromise: Promise<Model>;
        scale: number;
        shadows: ShadowMode;
        show: boolean;


        //Methods
        static fromGltf(options?: fromGltfOptions): Model;
        destroy(): void;
        getMaterial(name: string): ModelMaterial;
        getMesh(name: string): ModelMesh;
        getNode(name: string): ModelNode;
        isDestroyed(): boolean;
        update(): void;

    }


    export interface ModelOptions {
        gltf?: Object | ArrayBuffer | Uint8Array;
        basePath?: string;
        show?: boolean;
        modelMatrix?: Matrix4;
        scale?: number;
        minimumPixelSize?: number;
        maximumScale?: number;
        id?: Object;
        allowPicking?: boolean;
        incrementallyLoadTextures?: boolean;
        asynchronous?: boolean;
        shadows?: ShadowMode;
        debugShowBoundingVolume?: boolean;
        debugWireframe?: boolean;
        heightReference?: HeightReference;
        scene?: Scene;
        istanceDisplayCondition?: DistanceDisplayCondition;
    }


    export interface fromGltfOptions {
        url: string;
        headers?: Object;
        show?: boolean;
        modelMatrix?: Matrix4;
        scale?: number;
        minimumPixelSize?: number;
        maximumScale?: number;
        id?: Object;
        allowPicking?: boolean;
        incrementallyLoadTextures?: boolean;
        asynchronous?: boolean;
        shadows?: ShadowMode;
        debugShowBoundingVolume?: boolean;
        debugWireframe?: boolean;
    }


    export class ModelMaterial {
        constructor();
        //Members
        id: string;
        name: string;


        //Methods
        getValue(name: string): Object;
        setValue(name: string, value?: any): void;

    }


    export class ModelMesh {
        constructor();
        //Members
        id: string;
        materials: Array<ModelMaterial>;
        name: string;


        //Methods

    }


    export class ModelNode {
        constructor();
        //Members
        id: string;
        matrix: Matrix4;
        name: string;
        show: boolean;


        //Methods

    }


    export class ModelAnimationCollection {
        constructor();
        //Members
        animationAdded: Event;
        animationRemoved: Event;
        length: number;


        //Methods
        add(options?: addOptions): ModelAnimation;
        addAll(options?: addAllOptions): Array<ModelAnimation>;
        contains(animation: ModelAnimation): boolean;
        get(index: number): ModelAnimation;
        remove(animation: ModelAnimation): boolean;
        removeAll(): void;

    }


    export class ModelAnimation {
        constructor();
        //Members
        delay: number;
        loop: ModelAnimationLoop;
        name: string;
        removeOnStop: boolean;
        reverse: boolean;
        speedup: number;
        start: Event;
        startTime: JulianDate;
        stop: Event;
        stopTime: JulianDate;
        update: Event;


        //Methods

    }


    export class ModelAnimationLoop {
        constructor();
        //Members
        static MIRRORED_REPEAT: number;
        static NONE: number;
        static REPEAT: number;


        //Methods

    }


    export interface addOptions {
        name: string;
        startTime?: JulianDate;
        delay?: number;
        stopTime?: JulianDate;
        removeOnStop?: boolean;
        speedup?: number;
        reverse?: boolean;
        loop?: ModelAnimationLoop;
    }


    export interface addAllOptions {
        startTime?: JulianDate;
        delay?: number;
        stopTime?: JulianDate;
        removeOnStop?: boolean;
        speedup?: number;
        reverse?: boolean;
        loop?: ModelAnimationLoop;
    }


    export class ModelVisualizer implements Visualizer {
        constructor(scene: Scene, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class NavigationHelpButton {
        constructor(options?: NavigationHelpButtonOptions);
        //Members
        container: Element;
        viewModel: NavigationHelpButtonViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface NavigationHelpButtonOptions {
        container: Element | string;
        instructionsInitiallyVisible?: boolean;
    }


    export class NavigationHelpButtonViewModel {
        constructor();
        //Members
        command: Command;
        showClick: Command;
        showInstructions: boolean;
        showTouch: Command;
        tooltip: string;


        //Methods

    }


    export class NeverTileDiscardPolicy implements TileDiscardPolicy {
        constructor();
        //Members


        //Methods
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement): boolean;

    }


    export class NodeTransformationProperty implements Property<any>
    {
        constructor(options?: NodeTransformationPropertyOptions);
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        rotation: Property<any>;
        scale: Property<any>;
        translation: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: TranslationRotationScale): TranslationRotationScale;

    }


    export interface NodeTransformationPropertyOptions {
        translation?: PropertyOrValue<any>;
        rotation?: PropertyOrValue<any>;
        scale?: PropertyOrValue<any>;
    }


    export function objectToQuery(obj: any): string;


    export class OrthographicFrustum {
        constructor();
        //Members
        bottom: number;
        far: number;
        left: number;
        near: number;
        projectionMatrix: Matrix4;
        right: number;
        top: number;


        //Methods
        clone(result?: OrthographicFrustum): OrthographicFrustum;
        computeCullingVolume(position: Cartesian3, direction: Cartesian3, up: Cartesian3): CullingVolume;
        equals(other?: OrthographicFrustum): boolean;
        getPixelDimensions(drawingBufferWidth: number, drawingBufferHeight: number, distance: number, result: Cartesian2): Cartesian2;

    }


    export interface Packable {
        //Members
        packedLength: number;


        //Methods
        pack(value: any, array: Array<number>, startingIndex?: number): void;
        unpack(array: Array<number>, startingIndex?: number, result?: any): Object;

    }


    export interface PackableForInterpolation {
        //Members
        packedInterpolationLength: number;


        //Methods
        convertPackedArrayForInterpolation(packedArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: Array<number>): void;
        unpackInterpolationResult(array: Array<number>, sourceArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: any): Object;

    }


    export class PathVisualizer implements Visualizer {
        constructor(scene: Scene, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class PerformanceWatchdog {
        constructor(options?: PerformanceWatchdogOptions);
        //Members
        container: Element;
        viewModel: PerformanceWatchdogViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface PerformanceWatchdogOptions {
        container: Element | string;
        scene: Scene;
        lowFrameRateMessage?: string;
    }


    export class PerformanceWatchdogViewModel {
        constructor(options?: PerformanceWatchdogViewModelOptions);
        //Members
        dismissMessage: Command;
        lowFrameRateMessage: string;
        lowFrameRateMessageDismissed: boolean;
        scene: Scene;
        showingLowFrameRateMessage: boolean;


        //Methods

    }


    export interface PerformanceWatchdogViewModelOptions {
        scene: Scene;
        lowFrameRateMessage?: string;
    }


    export class PerInstanceColorAppearance {
        constructor(options?: PerInstanceColorAppearanceOptions);
        //Members
        static FLAT_VERTEX_FORMAT: VertexFormat;
        static VERTEX_FORMAT: VertexFormat;
        closed: boolean;
        faceForward: boolean;
        flat: boolean;
        fragmentShaderSource: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexFormat: VertexFormat;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface PerInstanceColorAppearanceOptions {
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class PerspectiveOffCenterFrustum {
        constructor();
        //Members
        bottom: number;
        far: number;
        infiniteProjectionMatrix: Matrix4;
        left: number;
        near: number;
        projectionMatrix: Matrix4;
        right: number;
        top: number;


        //Methods
        clone(result?: PerspectiveOffCenterFrustum): PerspectiveOffCenterFrustum;
        computeCullingVolume(position: Cartesian3, direction: Cartesian3, up: Cartesian3): CullingVolume;
        equals(other?: PerspectiveOffCenterFrustum): boolean;
        getPixelDimensions(drawingBufferWidth: number, drawingBufferHeight: number, distance: number, result: Cartesian2): Cartesian2;

    }


    export class PinBuilder {
        constructor();
        //Members


        //Methods
        fromColor(color: Color, size: number): HTMLCanvasElement;
        fromMakiIconId(id: string, color: Color, size: number): HTMLCanvasElement | Promise<HTMLCanvasElement>;
        fromText(text: string, color: Color, size: number): HTMLCanvasElement;
        fromUrl(url: string, color: Color, size: number): HTMLCanvasElement | Promise<HTMLCanvasElement>;

    }


    export class PixelFormat {
        constructor();
        //Members
        static ALPHA: number;
        static DEPTH_COMPONENT: number;
        static DEPTH_STENCIL: number;
        static LUMINANCE: number;
        static LUMINANCE_ALPHA: number;
        static RGB: number;
        static RGBA: number;


        //Methods

    }


    export function pointInsideTriangle(point: Cartesian2 | Cartesian3, p0: Cartesian2 | Cartesian3, p1: Cartesian2 | Cartesian3, p2: Cartesian2 | Cartesian3): boolean;


    export class PointPrimitive {
        constructor();
        //Members
        color: Color;
        distanceDisplayCondition: DistanceDisplayCondition;
        id: Object;
        outlineColor: Color;
        outlineWidth: number;
        pixelSize: number;
        position: Cartesian3;
        scaleByDistance: NearFarScalar;
        show: boolean;
        translucencyByDistance: NearFarScalar;


        //Methods
        computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
        equals(other: PointPrimitive): boolean;

    }


    export class PointPrimitiveCollection {
        constructor(options?: PointPrimitiveCollectionOptions);
        //Members
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;


        //Methods
        add(pointPrimitive?: any): PointPrimitive;
        contains(pointPrimitive?: PointPrimitive): boolean;
        destroy(): void;
        get(index: number): PointPrimitive;
        isDestroyed(): boolean;
        remove(pointPrimitive: PointPrimitive): boolean;
        removeAll(): void;

    }


    export interface PointPrimitiveCollectionOptions {
        modelMatrix?: Matrix4;
        debugShowBoundingVolume?: boolean;
    }


    export class PointVisualizer implements Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(time: JulianDate): boolean;

    }


    export class PolygonGeometry extends Geometry {
        constructor(options?: PolygonGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(polygonGeometry: PolygonGeometry): Geometry | void;
        static fromPositions(options?: fromPositionsOptions): PolygonGeometry;
        static pack(value: PolygonGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: PolygonGeometry): void;

    }


    export class PolygonHierarchy {
        constructor(positions?: Array<Cartesian3>, holes?: Array<PolygonHierarchy>);
        //Members
        holes: Array<PolygonHierarchy>;
        positions: Array<Cartesian3>;


        //Methods

    }


    export interface PolygonGeometryOptions {
        polygonHierarchy: PolygonHierarchy;
        height?: number;
        extrudedHeight?: number;
        vertexFormat?: VertexFormat;
        stRotation?: number;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        perPositionHeight?: boolean;
        closeTop?: boolean;
        closeBottom?: boolean;
    }


    export interface fromPositionsOptions {
        positions: Array<Cartesian3>;
        height?: number;
        extrudedHeight?: number;
        vertexFormat?: VertexFormat;
        stRotation?: number;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        perPositionHeight?: boolean;
        closeTop?: boolean;
        closeBottom?: boolean;
    }


    export class PolygonGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        onTerrain: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class PolygonOutlineGeometry {
        constructor(options?: PolygonOutlineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(polygonGeometry: PolygonOutlineGeometry): Geometry | void;
        static fromPositions(options?: fromPositionsOptions): PolygonOutlineGeometry;
        static pack(value: PolygonOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: PolygonOutlineGeometry): PolygonOutlineGeometry;

    }


    export interface PolygonOutlineGeometryOptions {
        polygonHierarchy: PolygonHierarchy;
        height?: number;
        extrudedHeight?: number;
        vertexFormat?: VertexFormat;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        perPositionHeight?: boolean;
    }


    export class Polyline {
        constructor(options?: PolylineOptions);
        //Members
        distanceDisplayCondition: DistanceDisplayCondition;
        id: Object;
        loop: boolean;
        material: Material;
        positions: Array<Cartesian3>;
        show: boolean;
        width: number;


        //Methods

    }


    export interface PolylineOptions {
        show?: boolean;
        width?: number;
        loop?: boolean;
        material?: Material;
        positions?: Array<Cartesian3>;
        id?: Object;
        distanceDisplayCondition?: DistanceDisplayCondition;
    }


    export class PolylineArrowMaterialProperty implements MaterialProperty {
        constructor(color?: PropertyOrValue<Color>);
        //Members
        color: Property<any>;
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export class PolylineCollection {
        constructor(options?: PolylineCollectionOptions);
        //Members
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;


        //Methods
        add(polyline?: any): Polyline;
        contains(polyline: Polyline): boolean;
        destroy(): void;
        get(index: number): Polyline;
        isDestroyed(): boolean;
        remove(polyline: Polyline): boolean;
        removeAll(): void;
        update(): void;

    }


    export interface PolylineCollectionOptions {
        modelMatrix?: Matrix4;
        debugShowBoundingVolume?: boolean;
    }


    export class PolylineColorAppearance {
        constructor(options?: PolylineColorAppearanceOptions);
        //Members
        static VERTEX_FORMAT: VertexFormat;
        closed: boolean;
        fragmentShaderSource: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexFormat: VertexFormat;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface PolylineColorAppearanceOptions {
        translucent?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class PolylineGeometry extends Geometry {
        constructor(options?: PolylineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(polylineGeometry: PolylineGeometry): Geometry;
        static pack(value: PolylineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: PolylineGeometry): PolylineGeometry;

    }


    export interface PolylineGeometryOptions {
        positions: Array<Cartesian3>;
        width?: number;
        colors?: Array<Color>;
        colorsPerVertex?: boolean;
        followSurface?: boolean;
        granularity?: number;
        vertexFormat?: VertexFormat;
        ellipsoid?: Ellipsoid;
    }


    export class PolylineGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class PolylineGlowMaterialProperty implements MaterialProperty {
        constructor(options?: PolylineGlowMaterialPropertyOptions);
        //Members
        color: Property<any>;
        definitionChanged: Event;
        glowPower: Property<any>;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface PolylineGlowMaterialPropertyOptions {
        color?: PropertyOrValue<any>;
        glowPower?: PropertyOrValue<any>;
    }


    export class PolylineMaterialAppearance {
        constructor(options?: PolylineMaterialAppearanceOptions);
        //Members
        static VERTEX_FORMAT: VertexFormat;
        closed: boolean;
        fragmentShaderSource: string;
        material: Material;
        renderState: Object;
        translucent: boolean;
        vertexFormat: VertexFormat;
        vertexShaderSource: string;


        //Methods
        getFragmentShaderSource(): string;
        getRenderState(): Object;
        isTranslucent(): boolean;

    }


    export interface PolylineMaterialAppearanceOptions {
        translucent?: boolean;
        material?: Material;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: RenderState;
    }


    export class PolylineOutlineMaterialProperty implements MaterialProperty {
        constructor(options?: PolylineOutlineMaterialPropertyOptions);
        //Members
        color: Property<any>;
        definitionChanged: Event;
        isConstant: boolean;
        outlineColor: Property<any>;
        outlineWidth: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface PolylineOutlineMaterialPropertyOptions {
        color?: PropertyOrValue<any>;
        outlineColor?: PropertyOrValue<Color>;
        outlineWidth?: PropertyOrValue<any>;
    }


    export class PolylineVolumeGeometry {
        constructor(options?: PolylineVolumeGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(polylineVolumeGeometry: PolylineVolumeGeometry): Geometry | void;
        static pack(value: PolylineVolumeGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: PolylineVolumeGeometry): PolylineVolumeGeometry;

    }


    export interface PolylineVolumeGeometryOptions {
        polylinePositions: Array<Cartesian3>;
        shapePositions: Array<Cartesian2>;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        vertexFormat?: VertexFormat;
        cornerType?: CornerType;
    }


    export class PolylineVolumeGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class PolylineVolumeOutlineGeometry {
        constructor(options?: PolylineVolumeOutlineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(polylineVolumeOutlineGeometry: PolylineVolumeOutlineGeometry): Geometry | void;
        static pack(value: PolylineVolumeOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: PolylineVolumeOutlineGeometry): PolylineVolumeOutlineGeometry;

    }


    export interface PolylineVolumeOutlineGeometryOptions {
        polylinePositions: Array<Cartesian3>;
        shapePositions: Array<Cartesian2>;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        cornerType?: CornerType;
    }


    export class PositionPropertyArray implements PositionProperty {
        constructor(value?: Array<Property<any>>, referenceFrame?: ReferenceFrame);
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time?: JulianDate, result?: Cartesian3): Cartesian3;
        getValue(time?: JulianDate, result?: Array<Cartesian3>): Array<Cartesian3>;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        setValue(value: Array<Property<any>>): void;

    }


    export class Primitive {
        constructor(options?: PrimitiveOptions);
        //Members
        allowPicking: boolean;
        appearance: Appearance;
        asynchronous: boolean;
        compressVertices: boolean;
        cull: boolean;
        debugShowBoundingVolume: boolean;
        geometryInstances: Array<GeometryInstance> | GeometryInstance;
        interleave: boolean;
        modelMatrix: Matrix4;
        ready: boolean;
        readyPromise: Promise<Primitive>;
        releaseGeometryInstances: boolean;
        shadows: ShadowMode;
        show: boolean;
        vertexCacheOptimize: boolean;


        //Methods
        destroy(): void;
        getGeometryInstanceAttributes(id: any): Object;
        isDestroyed(): boolean;
        update(): void;

    }


    export interface PrimitiveOptions {
        geometryInstances?: Array<GeometryInstance> | GeometryInstance;
        appearance?: Appearance;
        show?: boolean;
        modelMatrix?: Matrix4;
        vertexCacheOptimize?: boolean;
        interleave?: boolean;
        compressVertices?: boolean;
        releaseGeometryInstances?: boolean;
        allowPicking?: boolean;
        cull?: boolean;
        asynchronous?: boolean;
        debugShowBoundingVolume?: boolean;
        shadows?: ShadowMode;
    }


    export class PropertyArray implements Property<any>
    {
        constructor(value?: Array<Property<any>>);
        //Members
        definitionChanged: Event;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Array<any>): Array<Object>;
        setValue(value: Array<Property<any>>): void;

    }


    export class QuadraticRealPolynomial {
        constructor();
        //Members


        //Methods
        static computeDiscriminant(a: number, b: number, c: number): number;
        static computeRealRoots(a: number, b: number, c: number): Array<number>;

    }


    export class QuantizedMeshTerrainData {
        constructor(options?: QuantizedMeshTerrainDataOptions);
        //Members
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;


        //Methods
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<QuantizedMeshTerrainData> | void;
        wasCreatedByUpsampling(): boolean;

    }


    export interface QuantizedMeshTerrainDataOptions {
        quantizedVertices: Uint16Array;
        indices: Uint16Array | Uint32Array;
        minimumHeight: number;
        maximumHeight: number;
        boundingSphere: BoundingSphere;
        orientedBoundingBox?: OrientedBoundingBox;
        horizonOcclusionPoint: Cartesian3;
        westIndices: Array<number>;
        southIndices: Array<number>;
        eastIndices: Array<number>;
        northIndices: Array<number>;
        westSkirtHeight: number;
        southSkirtHeight: number;
        eastSkirtHeight: number;
        northSkirtHeight: number;
        childTileMask?: number;
        createdByUpsampling?: boolean;
        encodedNormals?: Uint8Array;
        waterMask?: Uint8Array;
    }


    export class QuarticRealPolynomial {
        constructor();
        //Members


        //Methods
        static computeDiscriminant(a: number, b: number, c: number, d: number, e: number): number;
        static computeRealRoots(a: number, b: number, c: number, d: number, e: number): Array<number>;

    }


    export class QuaternionSpline {
        constructor(options?: QuaternionSplineOptions);
        //Members
        innerQuadrangles: Array<Quaternion>;
        points: Array<Quaternion>;
        times: Array<number>;


        //Methods
        evaluate(time: number, result?: Quaternion): Quaternion;
        findTimeInterval(time: number): number;

    }


    export interface QuaternionSplineOptions {
        times: Array<number>;
        points: Array<Quaternion>;
        firstInnerQuadrangle?: Quaternion;
        lastInnerQuadrangle?: Quaternion;
    }


    export function queryToObject(queryString: string): Object;


    export class Queue {
        constructor();
        //Members
        length: number;


        //Methods
        clear(): void;
        contains(item: any): void;
        dequeue(): Object;
        enqueue(item: any): void;
        peek(): Object;
        sort(compareFunction: any): void;

    }


    export class RectangleGeometry extends Geometry {
        constructor(options?: RectangleGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(rectangleGeometry: RectangleGeometry): Geometry;
        static pack(value: RectangleGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: RectangleGeometry): RectangleGeometry;

    }


    export interface RectangleGeometryOptions {
        rectangle: Rectangle;
        vertexFormat?: VertexFormat;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        height?: number;
        rotation?: number;
        stRotation?: number;
        extrudedHeight?: number;
        closeTop?: boolean;
        closeBottom?: boolean;
    }


    export class RectangleGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        onTerrain: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createDynamicUpdater(primitives: PrimitiveCollection, primitivesForGroundPrimitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class RectangleOutlineGeometry {
        constructor(options?: RectangleOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(rectangleGeometry: RectangleOutlineGeometry): Geometry | void;
        static pack(value: RectangleOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: RectangleOutlineGeometry): RectangleOutlineGeometry;

    }


    export interface RectangleOutlineGeometryOptions {
        rectangle: Rectangle;
        ellipsoid?: Ellipsoid;
        granularity?: number;
        height?: number;
        rotation?: number;
        extrudedHeight?: number;
    }


    export class ReferenceProperty implements Property<any>
    {
        constructor(targetCollection: EntityCollection, targetId: string, targetPropertyNames: Array<string>);
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;
        resolvedProperty: Property<any>;
        targetCollection: EntityCollection;
        targetId: string;
        targetPropertyNames: Array<string>;


        //Methods
        static fromString(targetCollection: EntityCollection, referenceString: string): ReferenceProperty;
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;

    }


    export function requestAnimationFrame(callback: any): number;


    export class RequestErrorEvent {
        constructor(statusCode?: number, response?: any, responseHeaders?: any);
        //Members
        response: Object;
        responseHeaders: Object;
        statusCode: number;


        //Methods
        toString(): string;

    }


    export class Rotation {
        constructor();
        //Members
        static packedLength: number;


        //Methods
        static convertPackedArrayForInterpolation(packedArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: Array<number>): void;
        static pack(value: Rotation, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: Rotation): Rotation;
        static unpackInterpolationResult(array: Array<number>, sourceArray: Array<number>, startingIndex?: number, lastIndex?: number, result?: Rotation): Rotation;

    }


    export class RuntimeError {
        constructor(message?: string);
        //Members
        message: string;
        name: string;
        stack: string;


        //Methods

    }


    export class SampledProperty implements Property<any>
    {
        constructor(type: number | Packable, derivativeTypes?: Array<Packable>);
        //Members
        backwardExtrapolationDuration: number;
        backwardExtrapolationType: ExtrapolationType;
        definitionChanged: Event;
        derivativeTypes: Array<Packable>;
        forwardExtrapolationDuration: number;
        forwardExtrapolationType: ExtrapolationType;
        interpolationAlgorithm: InterpolationAlgorithm;
        interpolationDegree: number;
        isConstant: boolean;
        type: Object;


        //Methods
        addSample(time: JulianDate, value: Packable, derivatives?: Array<Packable>): void;
        addSamples(times: Array<JulianDate>, values: Array<Packable>, derivativeValues?: Array<Array<any>>): void;
        addSamplesPackedArray(packedSamples: Array<number>, epoch?: JulianDate): void;
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: any): Object;
        setInterpolationOptions(options?: setInterpolationOptionsOptions): void;

    }


    export interface setInterpolationOptionsOptions {
        interpolationAlgorithm?: InterpolationAlgorithm;
        interpolationDegree?: number;
    }


    export class SampledPositionProperty extends SampledProperty implements PositionProperty {
        constructor(referenceFrame?: ReferenceFrame, numberOfDerivatives?: number);
        //Members
        backwardExtrapolationDuration: number;
        backwardExtrapolationType: ExtrapolationType;
        definitionChanged: Event;
        forwardExtrapolationDuration: number;
        forwardExtrapolationType: ExtrapolationType;
        interpolationAlgorithm: InterpolationAlgorithm;
        interpolationDegree: number;
        isConstant: boolean;
        numberOfDerivatives: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        addSample(time: JulianDate, value: Packable, derivatives?: Array<Packable>): void;
        addSample(time: JulianDate, position: Cartesian3, derivatives?: Array<Cartesian3>): void;
        addSamples(times: Array<JulianDate>, values: Array<Packable>, derivativeValues?: Array<Array<any>>): void;
        addSamples(times: Array<JulianDate>, positions: Array<Cartesian3>, derivatives?: Array<Array<any>>): void;
        addSamplesPackedArray(packedSamples: Array<number>, epoch?: JulianDate): void;
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        setInterpolationOptions(options?: setInterpolationOptionsOptions): void;

    }


    export function sampleTerrain(terrainProvider: TerrainProvider, level: number, positions: Array<Cartographic>): Promise<Array<Cartographic>>;


    export class SceneModePicker {
        constructor(container: Element | string, scene: Scene, duration?: number);
        //Members
        container: Element;
        viewModel: SceneModePickerViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class SceneModePickerViewModel {
        constructor(scene: Scene, duration?: number);
        //Members
        dropDownVisible: boolean;
        duration: number;
        morphTo2D: Command;
        morphTo3D: Command;
        morphToColumbusView: Command;
        scene: Scene;
        sceneMode: SceneMode;
        selectedTooltip: string;
        toggleDropDown: Command;
        tooltip2D: string;
        tooltip3D: string;
        tooltipColumbusView: string;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class SceneTransforms {
        constructor();
        //Members


        //Methods
        static wgs84ToDrawingBufferCoordinates(scene: Scene, position: Cartesian3, result?: Cartesian2): Cartesian2;
        static wgs84ToWindowCoordinates(scene: Scene, position: Cartesian3, result?: Cartesian2): Cartesian2;

    }


    export class ScreenSpaceEventType {
        constructor();
        //Members
        static LEFT_CLICK: number;
        static LEFT_DOUBLE_CLICK: number;
        static LEFT_DOWN: number;
        static LEFT_UP: number;
        static MIDDLE_CLICK: number;
        static MIDDLE_DOUBLE_CLICK: number;
        static MIDDLE_DOWN: number;
        static MIDDLE_UP: number;
        static MOUSE_MOVE: number;
        static PINCH_END: number;
        static PINCH_MOVE: number;
        static PINCH_START: number;
        static RIGHT_CLICK: number;
        static RIGHT_DOUBLE_CLICK: number;
        static RIGHT_DOWN: number;
        static RIGHT_UP: number;
        static WHEEL: number;


        //Methods

    }


    export class SelectionIndicator {
        constructor(container: Element | string, scene: Scene);
        //Members
        container: Element;
        viewModel: SelectionIndicatorViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class SelectionIndicatorViewModel {
        constructor(scene: Scene, selectionIndicatorElement: Element, container: Element);
        //Members
        computeScreenSpacePosition: any;
        container: Element;
        isVisible: boolean;
        position: Cartesian3;
        scene: Scene;
        selectionIndicatorElement: Element;
        showSelection: boolean;


        //Methods
        animateAppear(): void;
        animateDepart(): void;
        update(): void;

    }


    export class ShowGeometryInstanceAttribute {
        constructor(show?: boolean);
        //Members
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        value: Uint8Array;


        //Methods
        static toValue(show: boolean, result?: Uint8Array): Uint8Array;

    }


    export class Simon1994PlanetaryPositions {
        constructor();
        //Members


        //Methods
        static computeMoonPositionInEarthInertialFrame(julianDate?: JulianDate, result?: Cartesian3): Cartesian3;
        static computeSunPositionInEarthInertialFrame(julianDate?: JulianDate, result?: Cartesian3): Cartesian3;

    }


    export class SimplePolylineGeometry extends Geometry {
        constructor(options?: SimplePolylineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(simplePolylineGeometry: SimplePolylineGeometry): Geometry;
        static pack(value: SimplePolylineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: SimplePolylineGeometry): SimplePolylineGeometry;

    }


    export interface SimplePolylineGeometryOptions {
        positions: Array<Cartesian3>;
        colors?: Array<Color>;
        colorsPerVertex?: boolean;
        followSurface?: boolean;
        granularity?: number;
        ellipsoid?: Ellipsoid;
    }


    export class SingleTileImageryProvider extends ImageryProvider {
        constructor(options?: SingleTileImageryProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface SingleTileImageryProviderOptions {
        url: string;
        rectangle?: Rectangle;
        credit?: Credit | string;
        ellipsoid?: Ellipsoid;
        proxy?: Object;
    }


    export class SphereGeometry {
        constructor(options?: SphereGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(sphereGeometry: SphereGeometry): Geometry;
        static pack(value: SphereGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: SphereGeometry): SphereGeometry;

    }


    export interface SphereGeometryOptions {
        radius?: number;
        stackPartitions?: number;
        slicePartitions?: number;
        vertexFormat?: VertexFormat;
    }


    export class SphereOutlineGeometry {
        constructor(options?: SphereOutlineGeometryOptions);
        //Members
        static packedLength: number;


        //Methods
        static createGeometry(sphereGeometry: SphereOutlineGeometry): Geometry;
        static pack(value: SphereOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: SphereOutlineGeometry): SphereOutlineGeometry;

    }


    export interface SphereOutlineGeometryOptions {
        radius?: number;
        stackPartitions?: number;
        slicePartitions?: number;
        subdivisions?: number;
    }


    export class Spline {
        constructor();
        //Members
        points: Array<Cartesian3> | Array<Quaternion>;
        times: Array<number>;


        //Methods
        evaluate(time: number, result?: Cartesian3 | Quaternion): Cartesian3 | Quaternion;
        findTimeInterval(time: number, startIndex: number): number;

    }


    export class StencilFunction {
        constructor();
        //Members
        static ALWAYS: number;
        static EQUAL: number;
        static GREATER: number;
        static GREATER_OR_EQUAL: number;
        static LESS: number;
        static LESS_OR_EQUAL: number;
        static NEVER: number;
        static NOT_EQUAL: number;


        //Methods

    }


    export class StencilOperation {
        constructor();
        //Members
        static DECREMENT: number;
        static DECREMENT_WRAP: number;
        static INCREMENT: number;
        static INCREMENT_WRAP: number;
        static INVERT: number;
        static KEEP: number;
        static REPLACE: number;
        static ZERO: number;


        //Methods

    }


    export class StripeMaterialProperty implements MaterialProperty {
        constructor(options?: StripeMaterialPropertyOptions);
        //Members
        definitionChanged: Event;
        evenColor: Property<any>;
        isConstant: boolean;
        oddColor: Property<any>;
        offset: Property<any>;
        orientation: Property<any>;
        repeat: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getType(time: JulianDate): string;
        getValue(time: JulianDate, result?: any): Object;

    }


    export interface StripeMaterialPropertyOptions {
        evenColor?: PropertyOrValue<Color>;
        oddColor?: PropertyOrValue<Color>;
        repeat?: PropertyOrValue<any>;
        offset?: PropertyOrValue<any>;
        orientation?: PropertyOrValue<any>;
    }


    export class StripeOrientation {
        constructor();
        //Members
        static HORIZONTAL: number;
        static VERTICAL: number;


        //Methods

    }


    export function subdivideArray(array: Array<any>, numberOfArrays: number): void;


    export class SvgPathBindingHandler {
        constructor();
        //Members


        //Methods

    }


    export class TaskProcessor {
        constructor(workerName: string, maximumActiveTasks?: number);
        //Members


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        scheduleTask(parameters: any, transferableObjects?: Array<any>): Promise<Object> | void;

    }


    export function throttleRequestByServer(url: string, requestFunction: any): Promise<Object> | void;


    export class TileCoordinatesImageryProvider {
        constructor(options?: TileCoordinatesImageryProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface TileCoordinatesImageryProviderOptions {
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        color?: Color;
        tileWidth?: number;
        tileHeight?: number;
    }


    export class TileProviderError {
        constructor(provider: ImageryProvider | TerrainProvider, message: string, x?: number, y?: number, level?: number, timesRetried?: number, error?: Error);
        //Members
        error: Error;
        level: number;
        message: string;
        provider: ImageryProvider | TerrainProvider;
        retry: boolean;
        timesRetried: number;
        x: number;
        y: number;


        //Methods
        static handleError(previousError: TileProviderError, provider: ImageryProvider | TerrainProvider, event: Event, message: string, x: number, y: number, level: number, retryFunction: any, errorDetails?: Error): TileProviderError;
        static handleSuccess(previousError: TileProviderError): void;

    }


    export class TimeIntervalCollectionProperty implements Property<any>
    {
        constructor();
        //Members
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        isConstant: boolean;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: any): Object;

    }


    export class TimeIntervalCollectionPositionProperty extends TimeIntervalCollectionProperty implements PositionProperty {
        constructor(referenceFrame?: ReferenceFrame);
        //Members
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        isConstant: boolean;
        referenceFrame: ReferenceFrame;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;

    }


    export class Timeline {
        constructor(container: Element, clock: Clock);
        //Members
        container: Element;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        resize(): void;
        zoomTo(startTime: JulianDate, stopTime: JulianDate): void;

    }


    export class Transforms {
        constructor();
        //Members


        //Methods
        static computeFixedToIcrfMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        static computeIcrfToFixedMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        static computeTemeToPseudoFixedMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        static eastNorthUpToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        static headingPitchRollQuaternion(origin: Cartesian3, heading: number, pitch: number, roll: number, ellipsoid?: Ellipsoid, result?: Quaternion): Quaternion;
        static headingPitchRollToFixedFrame(origin: Cartesian3, heading: number, pitch: number, roll: number, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        static northEastDownToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        static northUpEastToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        static pointToWindowCoordinates(modelViewProjectionMatrix: Matrix4, viewportTransformation: Matrix4, point: Cartesian3, result?: Cartesian2): Cartesian2;
        static preloadIcrfFixed(timeInterval: TimeInterval): Promise<void>;

    }


    export class TridiagonalSystemSolver {
        constructor();
        //Members


        //Methods
        static solve(diagonal: Array<number>, lower: Array<number>, upper: Array<number>, right: Array<Cartesian3>): Array<Cartesian3>;

    }


    export class TrustedServers {
        constructor();
        //Members


        //Methods
        static add(host: string, port: number): void;
        static clear(): void;
        static contains(url: string): boolean;
        static remove(host: string, port: number): void;

    }


    export class UrlTemplateImageryProvider extends ImageryProvider {
        constructor(options?: Promise<any> | any);
        //Members
        credit: Credit;
        enablePickFeatures: boolean;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;
        urlSchemeZeroPadding: Object;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        reinitialize(options: Promise<any> | any): void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export class VelocityOrientationProperty implements Property<any>
    {
        constructor(position?: Property<any>, ellipsoid?: Ellipsoid);
        //Members
        definitionChanged: Event;
        ellipsoid: Property<any>;
        isConstant: boolean;
        position: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time?: JulianDate, result?: Quaternion): Quaternion;

    }


    export class VelocityVectorProperty implements Property<any>
    {
        constructor(position?: Property<any>, normalize?: boolean);
        //Members
        definitionChanged: Event;
        isConstant: boolean;
        normalize: boolean;
        position: Property<any>;


        //Methods
        equals(other?: Property<any>): boolean;
        getValue(time?: JulianDate, result?: Cartesian3): Cartesian3;

    }


    export class VideoSynchronizer {
        constructor(options?: VideoSynchronizerOptions);
        //Members
        clock: Clock;
        element: HTMLVideoElement;
        epoch: JulianDate;
        tolerance: number;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export interface VideoSynchronizerOptions {
        clock?: Clock;
        element?: HTMLVideoElement;
        epoch?: JulianDate;
        tolerance?: number;
    }


    export class Viewer {
        constructor(container: Element | string, options?: ViewerOptions);
        //Members
        allowDataSourcesToSuspendAnimation: boolean;
        animation: Animation;
        baseLayerPicker: BaseLayerPicker;
        bottomContainer: Element;
        camera: Camera;
        canvas: HTMLCanvasElement;
        cesiumLogo: Element;
        cesiumWidget: CesiumWidget;
        clock: Clock;
        container: Element;
        dataSourceDisplay: DataSourceDisplay;
        dataSources: DataSourceCollection;
        entities: EntityCollection;
        fullscreenButton: FullscreenButton;
        geocoder: Geocoder;
        homeButton: HomeButton;
        imageryLayers: ImageryLayerCollection;
        infoBox: InfoBox;
        navigationHelpButton: NavigationHelpButton;
        resolutionScale: number;
        scene: Scene;
        sceneModePicker: SceneModePicker;
        screenSpaceEventHandler: ScreenSpaceEventHandler;
        selectedEntity: Entity;
        selectionIndicator: SelectionIndicator;
        shadowMap: ShadowMap;
        shadows: boolean;
        targetFrameRate: number;
        terrainProvider: TerrainProvider;
        terrainShadows: ShadowMode;
        timeline: Timeline;
        trackedEntity: Entity;
        useDefaultRenderLoop: boolean;
        vrButton: VRButton;


        //Methods
        destroy(): void;
        extend(mixin: any, options?: any): void;
        flyTo(target: Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer | Promise<Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer>, options?: flyToOptions): Promise<boolean>;
        forceResize(): void;
        isDestroyed(): boolean;
        render(): void;
        resize(): void;
        zoomTo(target: Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer | Promise<Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer>, offset?: HeadingPitchRange): Promise<boolean>;

    }


    export interface ViewerOptions {
        animation?: boolean;
        baseLayerPicker?: boolean;
        fullscreenButton?: boolean;
        vrButton?: boolean;
        geocoder?: boolean;
        homeButton?: boolean;
        infoBox?: boolean;
        sceneModePicker?: boolean;
        selectionIndicator?: boolean;
        timeline?: boolean;
        navigationHelpButton?: boolean;
        navigationInstructionsInitiallyVisible?: boolean;
        scene3DOnly?: boolean;
        clock?: Clock;
        selectedImageryProviderViewModel?: ProviderViewModel;
        imageryProviderViewModels?: Array<ProviderViewModel>;
        selectedTerrainProviderViewModel?: ProviderViewModel;
        terrainProviderViewModels?: Array<ProviderViewModel>;
        imageryProvider?: ImageryProvider;
        terrainProvider?: TerrainProvider;
        skyBox?: SkyBox;
        skyAtmosphere?: SkyAtmosphere;
        fullscreenElement?: Element | string;
        useDefaultRenderLoop?: boolean;
        targetFrameRate?: number;
        showRenderLoopErrors?: boolean;
        automaticallyTrackDataSourceClocks?: boolean;
        contextOptions?: Object;
        sceneMode?: SceneMode;
        mapProjection?: MapProjection;
        globe?: Globe;
        orderIndependentTranslucency?: boolean;
        creditContainer?: Element | string;
        dataSources?: DataSourceCollection;
        terrainExaggeration?: number;
        shadows?: boolean;
        terrainShadows?: ShadowMode;
        mapMode2D?: MapMode2D;
    }


    export class VRButton {
        constructor(container: Element | string, scene: Scene, vrElement?: Element | string);
        //Members
        container: Element;
        viewModel: VRButtonViewModel;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export class VRButtonViewModel {
        constructor(scene: Scene, vrElement?: Element | string);
        //Members
        command: Command;
        isVREnabled: boolean;
        isVRMode: boolean;
        tooltip: string;
        vrElement: Element;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;

    }


    export function viewerCesiumInspectorMixin(viewer: Viewer): void;


    export function viewerDragDropMixin(viewer: Viewer, options?: viewerDragDropMixinOptions): void;


    export interface viewerDragDropMixinOptions {
        dropTarget?: Element | string;
        clearOnDrop?: boolean;
        flyToOnDrop?: boolean;
        clampToGround?: boolean;
        proxy?: DefaultProxy;
    }


    export function viewerPerformanceWatchdogMixin(viewer: Viewer): void;


    export class ViewportQuad {
        constructor(rectangle?: BoundingRectangle, material?: Material);
        //Members
        material: Material;
        rectangle: BoundingRectangle;
        show: boolean;


        //Methods
        destroy(): void;
        isDestroyed(): boolean;
        update(): void;

    }


    export class Visibility {
        constructor();
        //Members
        static FULL: number;
        static NONE: number;
        static PARTIAL: number;


        //Methods

    }


    export class VRTheWorldTerrainProvider implements TerrainProvider {
        constructor(options?: VRTheWorldTerrainProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readyPromise: Promise<boolean>;
        tilingScheme: GeographicTilingScheme;


        //Methods
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, throttleRequests?: boolean): Promise<TerrainData> | void;

    }


    export interface VRTheWorldTerrainProviderOptions {
        url: string;
        proxy?: Object;
        ellipsoid?: Ellipsoid;
        credit?: Credit | string;
    }


    export class WallGeometry extends Geometry {
        constructor(options?: WallGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(wallGeometry: WallGeometry): Geometry | void;
        static fromConstantHeights(options?: fromConstantHeightsOptions): WallGeometry;
        static pack(value: WallGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: WallGeometry): WallGeometry;

    }


    export interface WallGeometryOptions {
        positions: Array<Cartesian3>;
        granularity?: number;
        maximumHeights?: Array<number>;
        minimumHeights?: Array<number>;
        ellipsoid?: Ellipsoid;
        vertexFormat?: VertexFormat;
    }


    export interface fromConstantHeightsOptions {
        positions: Array<Cartesian3>;
        maximumHeight?: number;
        minimumHeight?: number;
        ellipsoid?: Ellipsoid;
        vertexFormat?: VertexFormat;
    }


    export class WallGeometryUpdater implements GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        //Members
        materialAppearanceType: Appearance;
        perInstanceColorAppearanceType: Appearance;
        distanceDisplayConditionProperty: Property<any>;
        entity: Entity;
        fillEnabled: boolean;
        fillMaterialProperty: MaterialProperty;
        geometryChanged: boolean;
        hasConstantFill: boolean;
        hasConstantOutline: boolean;
        isClosed: boolean;
        isDynamic: boolean;
        outlineColorProperty: Property<any>;
        outlineEnabled: boolean;
        outlineWidth: number;
        shadowsProperty: Property<any>;


        //Methods
        createDynamicUpdater(primitives: PrimitiveCollection): DynamicGeometryUpdater;
        createFillGeometryInstance(time: JulianDate): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
        destroy(): void;
        isDestroyed(): boolean;
        isFilled(time: JulianDate): boolean;
        isOutlineVisible(time: JulianDate): boolean;

    }


    export class WallOutlineGeometry {
        constructor(options?: WallOutlineGeometryOptions);
        //Members
        packedLength: number;


        //Methods
        static createGeometry(wallGeometry: WallOutlineGeometry): Geometry | void;
        static fromConstantHeights(options?: fromConstantHeightsOptions): WallOutlineGeometry;
        static pack(value: WallOutlineGeometry, array: Array<number>, startingIndex?: number): Array<number>;
        static unpack(array: Array<number>, startingIndex?: number, result?: WallOutlineGeometry): WallOutlineGeometry;

    }


    export interface WallOutlineGeometryOptions {
        positions: Array<Cartesian3>;
        granularity?: number;
        maximumHeights?: Array<number>;
        minimumHeights?: Array<number>;
        ellipsoid?: Ellipsoid;
    }


    export class WebMapServiceImageryProvider extends ImageryProvider {
        constructor(options?: WebMapServiceImageryProviderOptions);
        //Members
        static DefaultParameters: any;
        static GetFeatureInfoDefaultParameters: any;
        credit: Credit;
        errorEvent: Event;
        hasAlphaChannel: boolean;
        layers: string;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface WebMapServiceImageryProviderOptions {
        url: string;
        layers: string;
        parameters?: Object;
        getFeatureInfoParameters?: Object;
        enablePickFeatures?: boolean;
        getFeatureInfoFormats?: Array<GetFeatureInfoFormat>;
        rectangle?: Rectangle;
        tilingScheme?: TilingScheme;
        ellipsoid?: Ellipsoid;
        tileWidth?: number;
        tileHeight?: number;
        minimumLevel?: number;
        maximumLevel?: number;
        credit?: Credit | string;
        proxy?: Object;
        subdomains?: string | Array<string>;
    }


    export class WebMapTileServiceImageryProvider extends ImageryProvider {
        constructor(options?: WebMapTileServiceImageryProviderOptions);
        //Members
        credit: Credit;
        errorEvent: Event;
        format: string;
        hasAlphaChannel: boolean;
        maximumLevel: number;
        minimumLevel: number;
        proxy: DefaultProxy;
        ready: boolean;
        readyPromise: Promise<boolean>;
        rectangle: Rectangle;
        tileDiscardPolicy: TileDiscardPolicy;
        tileHeight: number;
        tileWidth: number;
        tilingScheme: TilingScheme;
        url: string;


        //Methods
        getTileCredits(x: number, y: number, level: number): Array<Credit>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<Array<ImageryLayerFeatureInfo>> | void;
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement> | void;

    }


    export interface WebMapTileServiceImageryProviderOptions {
        url: string;
        format?: string;
        layer: string;
        style: string;
        tileMatrixSetID: string;
        tileMatrixLabels?: Array<any>;
        tileWidth?: number;
        tileHeight?: number;
        tilingScheme?: TilingScheme;
        proxy?: Object;
        rectangle?: Rectangle;
        minimumLevel?: number;
        maximumLevel?: number;
        ellipsoid?: Ellipsoid;
        credit?: Credit | string;
        subdomains?: string | Array<string>;
    }


    export class WebMercatorProjection {
        constructor(ellipsoid?: Ellipsoid);
        //Members
        static MaximumLatitude: number;
        ellipsoid: Ellipsoid;


        //Methods
        static geodeticLatitudeToMercatorAngle(latitude: number): number;
        static mercatorAngleToGeodeticLatitude(mercatorAngle: number): number;
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;

    }


    export class WebMercatorTilingScheme {
        constructor(options?: WebMercatorTilingSchemeOptions);
        //Members
        ellipsoid: Ellipsoid;
        projection: MapProjection;
        rectangle: Rectangle;


        //Methods
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;

    }


    export interface WebMercatorTilingSchemeOptions {
        ellipsoid?: Ellipsoid;
        numberOfLevelZeroTilesX?: number;
        numberOfLevelZeroTilesY?: number;
        rectangleSouthwestInMeters?: Cartesian2;
        rectangleNortheastInMeters?: Cartesian2;
    }


    export class WindingOrder {
        constructor();
        //Members
        static CLOCKWISE: number;
        static COUNTER_CLOCKWISE: number;


        //Methods

    }

}

declare namespace Cesium {
    let knockout: KnockoutStatic;
}

declare module "Cesium" {
    export = Cesium;
}
