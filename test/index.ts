import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as captain from '../src';

const API = suite('exports');

API('should export an object', () => {
	assert.type(captain, 'object');
});

API.run();