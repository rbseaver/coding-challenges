import { main } from './index.js'

describe('wc index tests', () => {
  const argvOriginal = process.argv;

  afterEach(() => {
    process.argv = argvOriginal;
  });

  test('should parse file name from command line', () => {
    process.argv = ['node', 'index.js', 'test.txt'];
    const logSpy = vi.spyOn(console, 'log');

    main();

    expect(logSpy).toHaveBeenCalledWith('test.txt');
  })
})