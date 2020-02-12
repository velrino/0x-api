import { BigNumber } from '@0x/utils';

// tslint:disable:custom-no-magic-numbers

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
export const NULL_BYTES = '0x';
export const ZRX_DECIMALS = 18;
export const DEFAULT_PAGE = 1;
export const DEFAULT_PER_PAGE = 20;
export const ZERO = new BigNumber(0);
export const MAX_TOKEN_SUPPLY_POSSIBLE = new BigNumber(2).pow(256);
export const DEFAULT_LOCAL_POSTGRES_URI = 'postgresql://api:api@localhost/api';
export const DEFAULT_LOGGER_INCLUDE_TIMESTAMP = true;
export const ONE_SECOND_MS = 1000;
export const ONE_MINUTE_MS = ONE_SECOND_MS * 60;
export const TEN_MINUTES_MS = ONE_MINUTE_MS * 10;
export const ERC20_BRIDGE_ASSET_PREFIX = '0xdc1600f3';

// Swap Quoter
export const QUOTE_ORDER_EXPIRATION_BUFFER_MS = ONE_SECOND_MS * 30; // Ignore orders that expire in 30 seconds
export const DEFAULT_QUOTE_SLIPPAGE_PERCENTAGE = 0.2; // 20% Slippage
export const ETH_SYMBOL = 'ETH';
export const ADDRESS_HEX_LENGTH = 42;
export const DEFAULT_TOKEN_DECIMALS = 18;
export const FIRST_PAGE = 1;
export const PERCENTAGE_SIG_DIGITS = 4;

// API namespaces
export const SRA_PATH = '/sra/v3';
export const STAKING_PATH = '/staking';
export const SWAP_PATH = '/swap/v0';
export const META_TRANSACTION_PATH = '/meta_transaction/v0';

// Docs
export const SWAP_DOCS_URL = 'https://0x.org/docs/api#swap';
export const SRA_DOCS_URL = 'https://0x.org/docs/api#sra';
export const META_TRANSACTION_DOCS_URL = 'https://0x.org/docs/api#meta_transaction';

// Sender keys
export const SENDER_ADDRESS = '0xf145745ffe14fa7e23a4f99225754346b2f597ac';
export const SENDER_PRIVATE_KEY = '65bfd588778267458bff375b8ab91dc22ddae257313baebf2ad449bbafd9471b';

// Taker keys
export const TAKER_ADDRESS = '0x9cc9fd7ac00ed2b5e219fa778e545316a19ac212';
export const TAKER_PRIVATE_KEY = '63533f71849e878235d53587685102af8afcb298d2e577d7aa11c32c8b847a59';
