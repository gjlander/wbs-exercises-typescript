import { type RequestHandler } from 'express';
import { isValidObjectId } from 'mongoose';
import User from '../models/User.js';
import { type ZodUserSchema } from '../zod/schemas.js';

export const getUsers: RequestHandler = async (req, res) => {
  const users = await User.find().lean();
  res.json(users);
};

export const createUser: RequestHandler<{}, {}, ZodUserSchema> = async (req, res) => {
  const {
    body: { email }
  } = req;

  const found = await User.findOne({ email });

  if (found) throw new Error('Email already exists', { cause: 400 });

  const user = await User.create(req.body);

  res.json(user);
};

export const getUserById: RequestHandler = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const user = await User.findById(id).select('+password').lean();

  if (!user) throw new Error('User not found', { cause: 404 });
  res.json(user);
};

export const updateUser: RequestHandler<{ id: string }, {}, ZodUserSchema> = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!user) throw new Error('User not found', { cause: 404 });

  res.json(user);
};

export const deleteUser: RequestHandler = async (req, res) => {
  const {
    params: { id }
  } = req;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const user = await User.findByIdAndDelete(id);

  if (!user) throw new Error('User not found', { cause: 404 });

  res.json({ message: 'User deleted' });
};
