'use strict';

jest.unmock('immutable');
require('jasmine-immutablejs-matchers');

beforeEach(() => {
    jasmine.addMatchers({
        isEmpty: () => ({
            compare: (actual) => ({
                pass: actual.isEmpty(),
            }),
        }),
    });
});
