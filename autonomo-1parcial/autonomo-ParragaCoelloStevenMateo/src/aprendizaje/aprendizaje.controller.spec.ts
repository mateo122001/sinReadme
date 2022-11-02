import { Test, TestingModule } from '@nestjs/testing';
import { AprendizajeController } from './aprendizaje.controller';

describe('AprendizajeController', () => {
  let controller: AprendizajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AprendizajeController],
    }).compile();

    controller = module.get<AprendizajeController>(AprendizajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
